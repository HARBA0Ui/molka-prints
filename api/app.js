import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import multer from "multer";

import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import productsRoute from "./routes/product.route.js";
import emailRoute from "./routes/email.route.js";
import settingsRoute from "./routes/settings.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "https://molka-prints-jqhx.vercel.app", credentials: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
  console.log("hello")
})

app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/products", productsRoute);
app.use("/api/email", emailRoute)
app.use("/api/settings", settingsRoute)
/*
app.listen(8800, () => {
  console.log("The server is running!!");
});
*/
