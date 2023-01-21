const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const app = express();


connectDB(); // Connect to mongoDB database
app.use(cors({ origin: true, credentials: true }));

// init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/books", require('./routes/bookRoutes'));
//app.use("/api/users", require("./routes/userRoutes"));





// Serve the frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   );
// } else {
//   app.get('/', (req, res) => res.send('Please set to production'));
// }

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
