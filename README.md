# 🛠️ Project Name – Full-Stack Laravel + React Application

A full-stack web application built with **Laravel (API)** as the backend and **React.js** as the frontend. This project demonstrates user authentication, CRUD operations, and API integration with a responsive UI using Tailwind CSS.

---

## 🚀 Features

- 🔐 User Authentication (Register, Login, Logout)
- 📝 Create, Read, Update, Delete (CRUD) functionality
- 📁 Image/File Upload
- 🔍 Search, Sort, Pagination
- 🛡️ Role-Based Access Control (Admin/User)
- 🎨 Fully Responsive UI using Tailwind CSS
- 🔗 API integration between Laravel & React using Axios
- 📦 Protected Routes in React (Private Routes)
- 📊 Dashboard with statistics (optional)

---

## 🧰 Tech Stack

### Backend – Laravel
- Laravel 10+
- Laravel Sanctum (for API Auth)
- Eloquent ORM
- RESTful API

### Frontend – React
- React 18+
- React Router DOM
- Axios for API requests
- Tailwind CSS
- React Hook Form / Formik

---

## 🔧 Installation

### 1. Backend (Laravel API)

```bash
git clone https://github.com/makbulhosen5000/lara-react-ecom.git
cd project-backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
