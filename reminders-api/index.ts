import express from "express";
import remainderRouter from "./routers/remainder";
import Remainder from "./remainder/remainder";
const app = express();

// route
app.use("/remainders", remainderRouter);
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// parse body
app.use(express.json());

const remainders: Remainder[] = [];

interface CreateRemainderDto {
  title: string;
}

app.post("/", (req, res) => {
  const { title } = req.body as CreateRemainderDto;
  const remainder = new Remainder(title);
  remainders.push(remainder);
  res.status(201).json(remainder);
});

app.listen(800, () => console.log(`Server started`));
