import express from "express";
import cors from "cors";
import router from "./routes/route.js";
// import profileRouter from "./routes/profile.js";
// import teamRouter from "./routes/team.js";
// import otpRouter from "./routes/otp.js";
// import imageUploader from "./routes/imageUploader.js";
// import taskRouter from "./routes/tasks.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Custom-Header"],
  }),
);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
