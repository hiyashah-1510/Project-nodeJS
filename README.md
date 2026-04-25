# 📚 Book Store Management System

## 📝 Project Overview

The **Book Store Management System** is a web-based application built using **Node.js, Express.js, MongoDB, EJS, and Multer**.
It allows users to perform full **CRUD operations** (Create, Read, Update, Delete) on book records and manage book cover images.

---

## 🎯 Objective

To create a simple and efficient system where users can:

* Add new books
* View all books
* Update book details
* Delete books
* Upload and display book images

---

## 🚀 Features

### ➕ Add Book

* Add book details:

  * Title
  * Author
  * Category
  * Price
  * Quantity
  * Description
  * Book Cover Image
* Image upload handled using **Multer**

---

### 📖 View Books

* Display all books from MongoDB
* Card-based UI design
* Shows:

  * Book Image
  * Title
  * Author
  * Category
  * Price
  * Quantity

---

### ✏️ Update Book

* Edit existing book details
* Pre-filled form for easy updates
* Option to change book image

---

### ❌ Delete Book

* Delete books using ID
* Instant removal from database

---

### 🖼️ Image Upload Management

* Images stored in `/public/uploads`
* File name saved in MongoDB
* Dynamically displayed in frontend

---

## 🧰 Technologies Used

* **Node.js** – Backend runtime
* **Express.js** – Web framework
* **MongoDB** – Database
* **Mongoose** – ODM
* **EJS** – Template engine
* **Multer** – File upload
* **Nodemon** – Development server

---

## 📁 Folder Structure

```
book-store/
│
├── public/
│   ├── uploads/
│   └── css/
│       └── style.css
│
├── views/
│   ├── index.ejs
│   ├── add.ejs
│   ├── edit.ejs
│
├── app.js
├── package.json
```

---

## ⚙️ Installation & Setup

---

### 1️ Install Dependencies

```
npm install
```

---

### 2 Run Project

```
npm start
```

---

### 3 Open in Browser

```
http://localhost:9002
```

---

## 🧾 MongoDB Schema

```js
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
});

```

---

## 📸 Screenshots

> Add screenshots of:

<img width="2239" height="745" alt="image" src="https://github.com/user-attachments/assets/e4f73977-0e14-42e9-b062-e21fadc90e37" />


<img width="2239" height="1203" alt="image" src="https://github.com/user-attachments/assets/bc645c60-68bb-4c39-bdff-7b6eaafdca7d" />


<img width="2212" height="1196" alt="image" src="https://github.com/user-attachments/assets/e65dc718-643a-49e9-b47a-ee92615a70e0" />


---

## 🧪 Example Output

```
Book Title: Harry Potter
Author: J.K. Rowling
Category: Magical,suspance
Price: ₹500
Quantity: 5
Image Uploaded Successfully
Book Added to Database Successfully
```

---

## ✅ Final Output

* ✔ Full CRUD functionality
* ✔ MongoDB integration
* ✔ Image upload using Multer
* ✔ Dynamic frontend using EJS
* ✔ Modern UI design

---

## 🙌 Author

**_Hiya Shah_**
