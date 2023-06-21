import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPerson(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {person && (
        <>
          <div>name: {person.name}</div>
          <div>spec: {person.spec}</div>
        </>
      )}
    </div>
  );
}

export default App;
