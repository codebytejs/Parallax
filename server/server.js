import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
});
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
