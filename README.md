# Books API (Dockerized)

A simple REST API to create, read, update, and delete books using **Node.js**, **Express**, and **MongoDB**.  
The entire application is fully containerized using **Docker** and **Docker Compose**.

---

## Project Structure & Purpose

| File / Folder | Purpose |
|---------------|---------|
| `Dockerfile` | Builds the application image |
| `docker-compose.yml` | Runs API + MongoDB together |
| `app/` | Node.js application source code |
| `.dockerignore` | Prevents unnecessary files from entering the Docker image |
| `.env.example` | Template for environment variables |
| `README.md` | Project documentation |

---

## Requirements
- Docker  
- Docker Compose  

---

## Run the Application (Development)

1. Copy environment template:
```bash
cp .env.example .env
```

2. Start the Docker containers:
```bash
docker compose up --build -d
```

3. View logs:
```bash
docker compose logs -f app
```

4. Open the API in browser:
```
http://localhost:3000/
```

---

## What Does This Application Do?

This Books API allows you to:
- Create a book  
- Get all books  
- Get a book by ID  
- Update a book  
- Delete a book  

---

## API Endpoints

### Health Check  
**GET /**
```json
{ "status": "books-api running" }
```

---

### Create a Book  
**POST /api/books**
```json
{
  "title": "My First Book",
  "author": "Nivas",
  "year": 2025
}
```

---

### Get All Books  
**GET /api/books**

### Get Book by ID  
**GET /api/books/:id**

### Update a Book  
**PUT /api/books/:id**
```json
{
  "title": "Updated Book Title",
  "year": 2030
}
```

---

### Delete a Book  
**DELETE /api/books/:id**
```json
{ "deleted": true }
```

---

## Verify the Application Works

1. Test health check → `GET /`  
2. Create a book  
3. Retrieve books  
4. Update a book  
5. Delete a book  
6. Restart Docker:
```bash
docker compose down
docker compose up -d
```

---

## Useful Docker Commands

Start:
```bash
docker compose up -d
```

Rebuild:
```bash
docker compose up --build -d
```

Stop:
```bash
docker compose down
```

Logs:
```bash
docker compose logs -f app
docker compose logs -f mongo
```

---

## Project Complete 🎉
Your Books API is fully dockerized, tested, and ready for submission.


