# Smart Classroom

A modern smart classroom platform with a Django REST API backend and a Vite + React + Tailwind dashboard frontend.

---

## Backend (Django REST)

- Python 3.13
- Django 3.2+
- REST API endpoints for attendance & assignments.
- Setup instructions in `backend/README.md`

### Start Backend

```bash
cd backend
# Anaconda (Windows)
conda create -n smartclass python=3.13
conda activate smartclass
# or venv (Mac/Linux)
python3.13 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

---

## Frontend (Vite + React + Tailwind)

- Vite + React + TailwindCSS v4.1
- Dashboard UI with Attendance & Assignments widgets
- Setup instructions in `frontend/README.md`

### Start Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Connecting Frontend and Backend

- Frontend fetches API data from Django endpoints (`http://localhost:8000/api/attendance/`, etc.).
- Ensure Django backend has CORS enabled:

  In `backend/requirements.txt`:
  ```
django-cors-headers
  ```
  In `backend/classroom/settings.py`:
  ```python
INSTALLED_APPS += ['corsheaders']
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware'] + MIDDLEWARE
CORS_ALLOW_ALL_ORIGINS = True  # For development
  ```

- Update `VITE_API_BASE_URL` in `frontend/.env` if using a different port.

---

## Contribution

PRs and issues welcome!

---

## License

Mozilla Public License 2.0