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
  // i'll be honest, i don't actually understand the line above. dbQuery doesn't ever get used, but is essential? i'm assuming it gets used by express or postgres or something
  // oh i think i get it. dbQuery doesn't necessarily need to be used, but since creating it also runs db.query() we get the nice side effect of both running the function and being able to reference that instance of it later if needed, the way it's used in the data variable in the app.get above

  res.status(200).json({ message: "added message" });
});

app.listen(8080, (req, res) => {
  console.log(`listening on port 8080`);
});
