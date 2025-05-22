# 📚 The BookShelf [LIVE](https://thebook-shelf.netlify.app/)

_The BookShelf_ is a full-stack online book-selling web application that allows users to browse, add books to a cart, and purchase them. It also features a super admin dashboard where books can be managed (add/edit/delete).

---

## ✨ Features

### 👥 Public Features
- Visitors can browse books without logging in.
- New users can register and log in.
- Registered users can:
  - Add books to the cart.
  - View their cart.
  - Proceed to checkout.

### 🛠️ Admin Features
- Super Admin has access to a separate `/admin` route.
- Admin can:
  - Add new books.
  - Edit existing books.
  - Delete books.
  - View overall dashboard statistics.

---

## 🚀 Live Site

## 👉 **[Click here to view the live app](https://thebook-shelf.netlify.app/)**

---

## 🖥️ Tech Stack

### Frontend
Built with React + Tailwind + Redux Toolkit:
## :dart: NPM packages used
- axios
- react-hook-form
- react-icons
- react-redux,
- react-router-dom
- sort-by
- sweetalert2
- swiper

---

## 🧪 Demo Credentials

### 👤 Visitor (User)
- **Email**: `visitor@gmail.com`
- **Password**: `123456`

### 🔐 Admin (go to `/admin` route)
- **Username**: `admin`
- **Password**: `tbs123`

---
## 🛠️ Local Setup Instructions

Follow these steps to run The BookShelf locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/the-bookshelf.git
cd the-bookshelf

``` 
### 2. Install Frontend Dependencies
```
cd client
npm install
```

### 3. Install Backend Dependencies
```
cd ../server
npm install
```
### 4. Setup Environment Variables
Create a .env file inside the server directory and add the following:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
Create another .env file in the client (frontend) directory for Firebase:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 5. Run Backend
```
cd server
nodemon index.js
```
### 6. Run Frontend
```
cd ../client
npm run dev
```

---

## 🚀 Backend Github Repo

## 👉 **[Click here to navigate backend Gitgub repository](https://github.com/Arittro7/the-bookshelf-server)**

--- 