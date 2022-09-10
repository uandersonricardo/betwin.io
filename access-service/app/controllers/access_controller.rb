class AccessController < ApplicationController
  before_action :authorize_request, except: %i[login register]

  def login
    @user = User.find_by_username(params[:username])

    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: {
        token:,
        exp: time.strftime('%m-%d-%Y %H:%M'),
        user: @user.as_json(except: %i[password_digest created_at updated_at])
      }, status: :ok
    else
      render json: { errors: ['User or password is invalid'] }, status: :unauthorized
    end
  end

  def register
    @user = User.new(register_params)

    if @user.save
      render json: @user.as_json(except: %i[password_digest created_at updated_at]),
             status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def me
    render json: @current_user.as_json(except: %i[password_digest created_at updated_at]),
           status: :ok
  end

  private

  def login_params
    params.permit(:email, :password)
  end

  def register_params
    params.permit(:username, :password, :cpf, :email)
  end
end
