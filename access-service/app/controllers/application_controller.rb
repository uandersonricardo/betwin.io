class ApplicationController < ActionController::API
  def not_found
    render json: { errors: ['Not found'] }, status: :not_found
  end

  def health
    render json: {}, status: 200
  end

  def authorize_request
    header = request.headers['Authorization']

    header = header.split(' ').last if header

    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: [e.message] }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: [e.message] }, status: :unauthorized
    end
  end
end
