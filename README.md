# 🎓 ExamPrep – Online Examination System

ExamPrep is a full-stack web application that provides a complete online examination platform for students and administrators. It allows students to register, take exams, view results, and manage their profiles, while administrators can manage subjects, questions, exams, sessions, and results through a dedicated dashboard.

## 🌐 Live Demo

**Frontend (Vercel):**
https://examprep-5xk3.vercel.app/

**Backend (Render):**
https://examprep-iiu7.onrender.com

---

## ✨ Features

### 👨‍🎓 Student
- Student Registration
- Secure Login
- Profile Management
- View Available Exams
- Attempt Online Exams
- View Results
- Change Password
- Contact Admin

### 👨‍💼 Admin
- Secure Admin Login
- Dashboard Overview
- Manage Sessions
- Manage Subjects
- Manage Students
- Manage Question Bank
- Create & Manage Exams
- Publish Results
- View Reports
- Change Password
- Manage Contact Messages

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Bootstrap
- React Router
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📁 Project Structure

```
ExamPrep
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── utils
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/muskanyaduvanshi/Examprep.git
```

Move into the project

```bash
cd Examprep
```

---

### Install Frontend

```bash
cd client
npm install
```

Run

```bash
npm run dev
```

---

### Install Backend

```bash
cd server
npm install
```

Run

```bash
npm run dev
```

---

## 🔑 Environment Variables

### Server (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
```

### Client (.env)

```env
VITE_API_BASE_URL=https://your-render-backend-url.onrender.com
```

---


## 🚀 Future Improvements

- JWT Authentication
- Password Encryption (bcrypt)
- Email Verification
- Forgot Password
- Timer for Online Exams
- Analytics Dashboard
- Role-Based Authorization
- Exam Performance Reports
- Dark Mode
- Responsive Mobile UI

---

## 👩‍💻 Author

**Muskan Yaduvanshi**

GitHub:
https://github.com/muskanyaduvanshi

LinkedIn:
https://www.linkedin.com/in/muskan-yaduvanshi-4704b4319
---

## 📄 License

This project is developed for learning and educational purposes.
