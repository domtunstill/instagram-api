Rails.application.routes.draw do
  resources :users
  scope '/api' do
    resources :comments
    resources :posts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
 