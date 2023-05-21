# Django React Boilerplate
The Django-React Boilerplate is a starting point for building web applications that combine the Django backend framework with a React frontend where React app is being served by Django

This project was generated using [vite](https://vitejs.dev/)

## Requirements
- Python 3.7+
- Node.js (version 12 or higher)
- npm (Node Package Manager) or Yarn

## Installation

### Backend
- Clone the repository and navigate to the project directory
  ```
  git clone https://github.com/madhvi-n/django-react-boilerplate.git
  cd django-react-boilerplate
  ```

- Create an environment and activate it
  ```
  virtualenv venv --python=python3
  source venv/bin/activate
  ```

- Install Python dependencies
  ```
  pip install -r requirements.txt
  ```

- Run database migrations and start the development server
  ```
  python manage.py migrate
  python manage.py runserver
  ```

### Frontend
- Navigate to the `static/frontend` directory:
  ```
  cd static/frontend/todo-app
  ```

- Install frontend dependencies
  ```
  npm install
  ```
  or
  ```
  yarn install
  ```

- Build the react app
  ```
  npm run build
  ```
  or
  ```
  yarn build
  ```

- Open your browser and visit `http://localhost:8000` to see the application.

### Project Structure
- The Django backend code is located in the root directory.
- The React frontend code is located in the `static/frontend` directory.


### Configuration
- Django settings can be found in the settings.py file.
- React configuration can be found in the static/frontend/todo-app/package.json file.
