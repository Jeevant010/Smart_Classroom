# Smart Classroom Frontend

This is the Vite + React + Tailwind CSS v4.1 dashboard for Smart Classroom.

## Setup

1. Install Node.js (v18+) and npm.
2. Copy `.env.example` to `.env` and adjust the API URL if needed.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. The dashboard runs at [http://localhost:5173](http://localhost:5173).

## Connecting to Django Backend

- Make sure your Django backend is running at `http://localhost:8000`
- If using a different port, update `VITE_API_BASE_URL` in `.env`

## CORS Note

Ensure your Django backend has CORS enabled (`django-cors-headers`) so the frontend can connect.
