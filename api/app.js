import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import multer from "multer";

import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import productsRoute from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/products", productsRoute);

app.listen(8800, () => {
  console.log("The server is running!!");
});
