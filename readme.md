# 🚀 Express.js PostgreSQL CRUD API (Dockerized PostgreSQL)

This project is a **RESTful CRUD API** built with **Express.js** and **PostgreSQL** (using Docker for database containerization).

It demonstrates how to:

- Set up PostgreSQL inside Docker
- Connect Express.js app with PostgreSQL
- Perform basic CRUD operations
- Manage environment variables for configuration

---

## 🐳 PostgreSQL Setup with Docker

Follow these steps to set up PostgreSQL using Docker:

### 1. Pull PostgreSQL Docker Image:

```bash
docker pull postgres
```

### 2. Run PostgreSQL Container:

```bash
docker run --name postgres-db \
  -e POSTGRES_PASSWORD=YOUR_PASSWORD \
  -p 5432:5432 \
  -d postgres
```

### 3. Verify Container:

```bash
docker ps
```

### 4. Connect to PostgreSQL:

```bash
docker exec -it postgres-db psql -U postgres
```

### 5. Create Your Database (Inside PostgreSQL CLI):

```bash
CREATE DATABASE "express-crud";
```

# ⚙️ Environment Variables (.env)

Create a .env file in the root of your project with the following content:

```bash
PORT=5001
DB_USER="postgres"
DB_HOST="localhost"
DB_DATABASE="express-crud"
DB_DBPORT=5432
DB_PASSWORD="YOUR_PASSWORD"
```

# 📂 Project Structure

```bash
├── node_modules/           
├── src/                    
│   ├── config/             # Database configs & connection
│   ├── controller/         # Request Handlers / Controllers
│   ├── data/               # (Optional) Static files or dummy data
│   ├── middleware/         # Custom Middlewares
│   ├── models/             # Database Models / Query Files
│   ├── routes/             # API Routes (CRUD endpoints)
│   └── index.js            # Main Entry Point (Express App starts here)
├── .env                    # Environment Variables
├── package.json            # Project Metadata & Scripts
├── package-lock.json       # Dependency Lock File
```

# ✅ How to Run the Project

### 1. Ensure PostgreSQL Container is Running:

```bash
docker start postgres-db
```

### 2. Install Dependencies:

```bash
npm install
```

### 3. Start the Express Server:

```bash
npm run dev
```

## 👨‍💻 Author

**Harsh Tuli**  
[GitHub](https://github.com/452Harsh)