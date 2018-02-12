Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#home", defaults: { format: 'json' }

  get "home" => "application#home", defaults: { format: 'json' }
  get "sports" => "application#sports", defaults: { format: 'json' }

  resources :products, defaults: { format: 'json' }
end
