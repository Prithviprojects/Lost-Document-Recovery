📂 Lost Documents App — Backend
📌 Overview
The Lost Documents App Backend is built using Node.js, Express, and MongoDB.
It provides a secure API for:

User authentication (register, login)

Reporting lost or found documents

Searching documents based on criteria

The backend uses JWT for authentication and bcrypt for password hashing to ensure security.

⚙️ Tech Stack
Runtime: Node.js (v22+)

Framework: Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT (JSON Web Tokens)

Security: bcrypt for password hashing

File Upload: Multer (if image storage is needed)

Environment Variables: dotenv

📁 Folder Structure
bash
Copy
Edit
backend/
├── config/
│   └── db.js                  # Database connection setup
├── controllers/
│   ├── authController.js      # Handles register & login logic
│   └── documentController.js  # Handles report & search documents
├── middleware/
│   └── authMiddleware.js      # Protects routes using JWT
├── models/
│   ├── User.js                 # User schema
│   └── Document.js             # Document schema
├── routes/
│   ├── authRoutes.js           # Auth-related routes
│   └── documentRoutes.js       # Document-related routes
├── app.js                      # Express app setup
├── server.js                   # Starts the server
├── .env                        # Environment variables
├── package.json                # Backend dependencies
└── README.md                   # Backend documentation
🔑 Environment Variables (.env)
Create a .env file in the backend/ folder:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
🚀 Installation & Setup
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/lost-documents-app.git
cd lost-documents-app/backend
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Setup environment variables
Create a .env file as shown above.

4️⃣ Run the backend server

bash
Copy
Edit
npm run dev   # for development (nodemon)
npm start     # for production
📡 API Endpoints
Auth Routes (/api/auth)
Method	Endpoint	Description	Auth Required
POST	/register	Register new user	❌
POST	/login	Login user & get JWT	❌

Document Routes (/api/documents)
Method	Endpoint	Description	Auth Required
POST	/report	Report lost/found document	✅
GET	/search	Search documents	✅

🔒 Security Measures
Password Hashing: Uses bcrypt to hash passwords before saving to DB.

JWT Authentication: Each logged-in user gets a token to access protected routes.

Input Validation: Ensures proper data format before processing.

🛠 Scripts
bash
Copy
Edit
npm run dev   # Run with nodemon (auto-restart on changes)
npm start     # Run in production mode
📬 Example API Request
Register User

bash
Copy
Edit
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "mypassword"
}
Response

json
Copy
Edit
{
  "message": "User registered successfully"
}

