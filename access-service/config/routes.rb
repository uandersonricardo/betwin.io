Rails.application.routes.draw do
  post '/login', to: 'access#login'
  post '/register', to: 'access#register'
  get '/me', to: 'access#me'

  get '/health', to: 'application#health'

  get '/*a', to: 'application#not_found'
end
