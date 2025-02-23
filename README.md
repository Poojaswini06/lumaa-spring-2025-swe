# Task Management API

## Demo Video
[[Video Demonstration](your-video-link)](https://photos.app.goo.gl/S5qbmcmo7TiYF8rg6)

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables in `.env`:
   ```
   JWT_SECRET=mysecretkey12345
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=task_user
   DB_PASSWORD=123456
   DB_NAME=task_management
   ```
4. Start the server: `npm run dev`


## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user

### Tasks
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task
