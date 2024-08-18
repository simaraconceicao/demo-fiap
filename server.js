const express = require('express');
const app = express();
const sumRouter = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json());

sumRouter.post('/sum', (req, res) => {
  const { num1, num2 } = req.body;

  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
  }

  const sum = parseFloat(num1) + parseFloat(num2);
  res.json({ sum });
});

app.use(sumRouter);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
