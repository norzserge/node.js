import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Logs info about request
app.use(morgan('tiny'));
// Converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// Converts form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));
// Enable all CORS requests
app.use(cors());

app.use((req, res) => {
  const personData = {
    name: 'Sergey',
    spec: 'senior',
  };

  console.log(req.body);

  return res.json(personData);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening at port ${PORT}`);
});
