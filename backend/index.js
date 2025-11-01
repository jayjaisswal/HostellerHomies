const express = require("express");
const connectDB = require("./utils/conn");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(
  cors({
    origin: [
      "https://hosteller-homies-two.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// app.use(cors({
//   origin: "*", // ❗ ONLY for testing, not production
// }));
app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/complaint", require("./routes/complaintRoutes"));
app.use("/api/invoice", require("./routes/invoiceRoutes"));
app.use("/api/messoff", require("./routes/messoffRoutes"));
app.use("/api/request", require("./routes/requestRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/suggestion", require("./routes/suggestionRoutes"));
app.use("/api/Event", require("./routes/EventFundRoutes.js"));
app.use('/api/rooms', require('./routes/roomRoutes'));
app.use('/api/guard', require('./routes/securityGuards'));


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
