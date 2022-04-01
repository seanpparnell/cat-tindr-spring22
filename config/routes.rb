Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users, except: [:index, :show, :create, :destroy, :update] do
      resources :cats do
        put '/switchOwner', to: 'cats#switchOwner'
      end
      get '/randomCats', to: 'cats#randomCats'
    end

    resources :cats , except: [:index, :show, :create, :destroy, :update] do
      resources :notes
    end
    
  end
  
end