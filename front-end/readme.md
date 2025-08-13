
---

# 📄 Lost Document Recovery Platform – Frontend

This is the **frontend** of the **Lost Document Recovery Platform**, built using **React.js**.
The platform allows users to **register, log in, report found documents, and search for lost documents** with a clean, responsive UI.

---

## 🚀 Features

* **User Authentication** – Login & Register with backend JWT integration.
* **Report Found Documents** – Submit details like type, serial number, and location.
* **Search Lost Documents** – Search by serial number and view matching results.
* **Responsive UI** – Works on desktop, tablet, and mobile.
* **API Integration** – Fully connected to the Node.js backend using Axios.
* **Error & Success Notifications** – User-friendly feedback for all actions.

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* React Router DOM
* Axios
* Tailwind CSS / CSS Modules (based on your styling choice)

**Backend (API):**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## 📂 Folder Structure

```
frontend/
│── public/                # Static assets
│── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components (Login, Register, Search, Report)
│   ├── services/           # Axios API calls
│   ├── App.js              # Main app component with routes
│   ├── index.js            # React entry point
│── package.json            # Dependencies & scripts
│── README.md               # Documentation
```

---

## ⚙️ Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/yourusername/lost-documents-frontend.git
cd lost-documents-frontend
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Configure environment variables**
Create a `.env` file in the `frontend` directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

4️⃣ **Run the app**

```bash
npm start
```

The app will run on **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 API Endpoints Used

| Method | Endpoint                | Description             |
| ------ | ----------------------- | ----------------------- |
| POST   | `/api/auth/register`    | User registration       |
| POST   | `/api/auth/login`       | User login              |
| POST   | `/api/documents/report` | Report a found document |
| GET    | `/api/documents/search` | Search lost documents   |

---

## 🧪 Example Pages

* **Login Page** – Authenticates user with backend.
* **Register Page** – Creates new account.
* **ReportDocument** – Form to report found documents.
* **SearchDocuments** – Search bar with results display.

---

## 🖼️ Screenshots (Optional)

*(You can add actual screenshots of the UI here)*

---

## 📜 License

This project is licensed under the **MIT License**.

---

