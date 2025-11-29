# SoloTech Library App

This is the backend for the SoloTech Library App developed for COMP229 – Web Application Development.

##  Features
- User Registration & Login
- JWT Authentication
- MongoDB Atlas (Cloud Database)
- Full CRUD for Books (Create, Read, Update, Delete)
- Followed MVC Architecture
- Tested with Postman

---

##  Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Postman (API testing)

---

##  Installation

1. Install dependencies:
npm install


2. Create a `.env` file with:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=supersecret123


3. Start the server:
npm run dev

You should see:
Server started on port 5000
MongoDB connected


---

## 📡 API Endpoints

###  Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |

###  Book Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get one book |
| POST | /api/books | Create book *(requires JWT)* |
| PUT | /api/books/:id | Update book *(requires JWT)* |
| DELETE | /api/books/:id | Delete book *(requires JWT)* |

---

##  Testing with Postman
1. Register a user  
2. Login to get token  
3. Use:
Authorization: Bearer <your token>

in protected routes

---

## 👨 Developer
**Rise**  
Team Name: **SoloTech**  

COMP229 – Web Application Development

---

##  Project Structure

solo-library/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── server.js
│── package.json
│── README.md


---

##  Status
First Release complete (Part 2). Backend fully functional.



