import pg from "pg";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get(`/`, (req, res) => {
  console.log(`GET requested to /`);
  res.send(`GET requested to / successfully`);
});

app.get("/reviews", async (req, res) => {
  const data = await db.query(`SELECT * FROM reviews`);
  const messages = data.rows;
  res.status(200).json(messages);
});

app.post("/reviews", async (req, res) => {
  const userData = req.body;
  console.log(userData);

  const dbQuery = await db.query(
    `INSERT INTO reviews (name, rating, reviewText) VALUES ($1, $2, $3)`,
    [userData.name, Number(userData.rating), userData.reviewText],
  );

  res.status(200).json({ message: "added message" });
});

app.listen(8085, (req, res) => {
  console.log(`listening on port 8080`);
});
