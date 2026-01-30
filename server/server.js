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

app.listen(8080, (req, res) => {
  console.log(`listening on port 8080`);
}); // yeah i wanted to do a funny number but couldn't think of one. 6969 is inappropriate, 0420 and 0451 are too low, 1337 is played, y'know?

app.get(`/`, (req, res) => {
  console.log(`GET requested to /`);
  res.status(200).send(`GET requested to / successfully`);
});

app.get(`/reviews`, (req, res) => {
  console.log(`GET requested to /reviews`);
  res.status(200).send(`GET requested to /reviews successfully`);
});

app.post(`/reviews`, async (req, res) => {
  const submissionData = req.body;
  const query = await db.query(
    `INSERT INTO reviews (name, rating, review) VALUES ($1, $2, $3)`,
    [submissionData.name, submissionData.rating, submissionData.review],
  );
});
