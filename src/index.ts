import express from "express";
import { db } from "./lib/db";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const obj = await db.user.findMany();
  res.status(200).json({
    message: "Users successfully get.",
    obj,
  });
});

app.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});
