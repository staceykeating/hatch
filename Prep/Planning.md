# User Stories
Main page
- Users can see site / gain knowledge of site
- Users can login or create account
- Users can see name when logged in


Login / Register Page
- Users can log-in using google*
- Users can create acount using names, email, password/password confirmation
- Users can login with exisiting eamila nd password


Dashboard page
- Users can see all trips
- Users can create a new trip
- Users can add friends


Create trip Form page
- Users can plan a trip with a name and destination
- user can add multiple cities and select calendar days for trip
- Users can make friends collaborators
- Users will see a loading page when trip is created


Created Trips
- Users can switch between different tabs(cities, title page)
- Users can see a map with route and destinations on title page
- Users can see current weather in the destination
- Users can delete / add components
- Users can search places to components
- Users can add text to components
- Users can add / delete places/text item from components
- Users can add collaborators after created


## Endpoints

Ruby Rails Routes

  root to: '/' or 'hatch#index'

  resources :trip, only: [:create, :show, :destroy]
  resources :create-trip only: [:create, :new]
  '/trip'
  '/trip/[:id]'

  resources :login, only: [:new, :create]
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'


  resources :logout, only: [:destroy]
  get '/logout' => 'sessions#destroy'

  resources :users, only: [:new, :create]
  get '/signup' => 'users#new'
  post '/users' => 'users#create'


## Questions :

- How to best incorportate packing list, should we create a seperate table for it?
- Any insight in to google login API?
- Best way to implement drag and drop feature?
- Are we doing too much or too little?
- Insight in how to best make rails and react work together - we were thinking of doing two   seperate repos.