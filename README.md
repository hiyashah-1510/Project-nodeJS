# 💻 Custom Server Builder

## 🎯 Objective

Create a Node.js HTTP server using the built-in **http module** without Express.js. The server handles multiple routes, sends different response types, manages query parameters, and returns proper status codes.

## 🛠 Technologies Used

* 🟢 Node.js
* 🌐 http module
* 📁 fs module
* 🔗 url module

## 📍 Routes

| Route                 | Description             |
| --------------------- | ----------------------- |
| 🏠 `/`                | Home Page               |
| ℹ️ `/about`           | About Page              |
| 📞 `/contact`         | Contact Page            |
| 📦 `/data`            | JSON Response           |
| 👤 `/user?name=value` | Query Parameter Example |

## ▶️ How to Run

```bash
node server.js
```

Open in browser:

```
http://localhost:8008
```

## 📊 Status Codes

* ✅ **200** – Success
* ❌ **404** – Page Not Found
* ⚠️ **500** – Server Error

## 📌 Conclusion

This project demonstrates how to build a basic server in **Node.js** using the **http module**, handle routing, return HTML/JSON responses, and manage query parameters.

## 👩‍💻 Author

**_Hiya Shah_**
