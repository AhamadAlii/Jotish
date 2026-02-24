# Jotish.com

A multi-page ReactJS application built using Vite.  
This project demonstrates authentication, REST API integration, routing, data visualization, map rendering, and camera capture functionality.

---

## 🚀 Features

### 🔐 Login Page
- Client-side authentication
- Valid credentials:
  - **Username:** testuser
  - **Password:** Test123
- Redirects to List page after successful login

### 📋 List Page
- Fetches employee data from REST API
- Displays structured list of records
- Each item navigates to Details page

### 📄 Details Page
- Displays detailed information of selected employee
- Includes camera capture functionality

### 📊 Bar Chart Page
- Visualizes salary data of first 10 employees

### 🗺 Map Page
- Displays employee cities on a map

---

## 🌐 API Details

**Endpoint:**
https://backend.jotish.in/backend_dev/gettabledata.php

**Method:** POST  
**Content-Type:** application/json  

---

## 🛠 Tech Stack

- ReactJS (Vite)
- React Router
- CSS Modules
- Fetch API
- Chart Library
- Browser Camera API

---
## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/AhamadAlii/Jotish.git
cd Jotish
```

### Install dependencies
```bash
npm install 
```

### Run development server
```bash
npm run dev
```
