# frozen_string_literal: true

Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :posts do
    resources :comments
  end
end
