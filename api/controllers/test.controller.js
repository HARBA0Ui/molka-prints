import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";
import bcryptjs from "bcryptjs"

export const shouldBeAdmin = async (req, res) => {
  return res.status(200).json({ message: "You are authenticated!" });
};