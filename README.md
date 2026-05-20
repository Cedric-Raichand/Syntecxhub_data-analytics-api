# 📊 Data Analytics API

A RESTful API built using Node.js, Express, and MongoDB that demonstrates MongoDB aggregation pipelines for analytics and reporting.

---

## 🚀 Features

- Create notes data
- View all notes
- Analytics using MongoDB Aggregation Pipeline
- Count notes per category
- Count notes per user
- Filter analytics by user
- Filter analytics by date range
- Use of `$group`, `$project`, and `$match`

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📁 Project Structure

```text
data-analytics-api/
│── server.js
│── models/
│   └── Note.js
│── routes/
│   └── analyticsRoutes.js
│── .env
│── package.json
```

---

## 📡 API Endpoints

### Create Note

```http
POST /api/analytics/notes
```

### Get All Notes

```http
GET /api/analytics/notes
```

### Analytics — Notes Per Category

```http
GET /api/analytics/notes-per-category
```

### Analytics — Notes Per User

```http
GET /api/analytics/notes-per-user
```

### Filtered Analytics

```http
GET /api/analytics/filtered-analytics
```

---

## 🔎 Query Parameters

### Filter by User

```http
GET /api/analytics/filtered-analytics?user=Cedric
```

### Filter by Date Range

```http
GET /api/analytics/filtered-analytics?startDate=2026-01-01&endDate=2026-12-31
```

### Filter by User + Date Range

```http
GET /api/analytics/filtered-analytics?user=Cedric&startDate=2026-01-01&endDate=2026-12-31
```

---

## 🧪 Testing

Use Postman or similar API testing tools.

---

## 👨‍💻 Author

Built as part of Backend Development Internship tasks.

---

## 📜 License

For educational purposes only.
