const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware to parse JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML
app.use(express.static("public"));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));


// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// // ✅ Serve static HTML files from /public folder
// app.use(express.static("public"));

// // Routes
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));


// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json()); // parse JSON bodies

// // Routes
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));
