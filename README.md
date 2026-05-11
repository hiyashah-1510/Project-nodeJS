# 🚀 Admin Panel Project

An Admin Panel project built using Node.js, Express.js, MongoDB, EJS, Multer, and bcrypt.

This project provides 🔐 Authentication and 🛠️ CRUD Operations for admin users.

---

# ✨ Features

- 👤 Admin Registration
- 🔑 Admin Login
- 🚪 Logout System
- 🍪 Cookie-Based Authentication
- ➕ Add Admin
- 👀 View Admins
- ✏️ Edit Admin
- ❌ Delete Admin
- 🖼️ Avatar Upload using Multer
- 🔒 Password Encryption using bcrypt

---

# 🛠️ Technologies Used

- ⚡ Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 📦 Mongoose
- 🎨 EJS
- 📁 Multer
- 🔐 bcrypt

---

# 🏗️ MVC Architecture

```text
Model → Database
View → Frontend
Controller → Business Logic
```

---

# 🔄 Project Flow

```text
User Request
     ↓
Routes
     ↓
Controller
     ↓
MongoDB
     ↓
View (EJS)
```

---

# 🔐 Authentication

This project uses 🍪 Cookie-Based Authentication.

After successful login, an `adminId` cookie is stored in the browser. Middleware checks this cookie before allowing dashboard access.

If the cookie is missing, the user is redirected to the Login Page.

---

# 📋 CRUD Operations

| Operation | Description |
|-----------|-------------|
| ➕ Create | Add Admin |
| 👀 Read | View Admin |
| ✏️ Update | Edit Admin |
| ❌ Delete | Delete Admin |

---

# 📁 Multer Usage

Multer is used for uploading 🖼️ Admin Avatar Images.

Uploaded images are stored in the server folder and image filenames are saved in MongoDB.

---

# 📸 Project Screenshots

## 🔑 Login Page

<img width="2225" height="1196" alt="image" src="https://github.com/user-attachments/assets/d0b2f1b0-eeff-4363-95d2-58705cd00991" />

---

## 🔑 Register Page

<img width="2223" height="1195" alt="image" src="https://github.com/user-attachments/assets/eb462c61-165d-402a-81e6-7904f832cdbe" />

---

## 📊 Dashboard

<img width="2216" height="1199" alt="image" src="https://github.com/user-attachments/assets/70d5d953-dba7-4032-8da4-10e9860f7c5f" />

---

## ➕ Add Admin Page

<img width="2239" height="1129" alt="image" src="https://github.com/user-attachments/assets/ed5d73ec-0b29-43e2-ad20-63795f51f670" />

---

## 👀 View Admin Page

<img width="2013" height="382" alt="image" src="https://github.com/user-attachments/assets/ea5833aa-846c-4027-8713-b876a756274d" />

---

# ⚙️ Installation

## 📦 Install Dependencies

```bash
npm install
```

## ▶️ Start Server

```bash
npm start
```

---

# 🎯 Conclusion

This project helped in understanding:

- 🏗️ MVC Architecture
- 🔐 Authentication
- 🛠️ CRUD Operations
- 🍃 MongoDB Integration
- 📁 File Upload Handling
- 🔒 Password Security

# Author

**_Hiya Shah_**
