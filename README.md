# Client Lead Management System

This workspace contains a React frontend and a Django REST Framework backend.

## Backend setup

1. Open `d:\client lead\backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate it: `venv\Scripts\activate` on Windows
4. Install packages: `pip install -r requirements.txt`
5. Run migrations: `python manage.py migrate`
6. Start server: `python manage.py runserver`

The backend API will be available at `http://localhost:8000/api/leads/`.

## Frontend setup

1. Open `d:\client lead\frontend`
2. Install dependencies: `npm install`
3. Start app: `npm start`

The frontend will run on `http://localhost:3000` and call the DRF API at `http://localhost:8000/api`.

## Notes

- Add new leads, edit status, save notes, and delete leads from the React UI.
- The backend uses SQLite by default and is configured for CORS from any origin.
