import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 5000;

// Logs info about request
app.use(morgan('tiny'));
// Converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// Converts form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  console.log(req.body);

  return res.send('This is express server');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening at port ${PORT}`);
});
