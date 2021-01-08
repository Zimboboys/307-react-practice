import { useState } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
  const [characters, updateCharacters] = useState([]);

  const addCharacter = character => {
    updateCharacters([...characters, character]);
  };

  const removeCharacter = index => {
    updateCharacters(
      characters.filter((c, i) => i !== index)
    );
  };

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <Form addCharacter={addCharacter} />
    </div>
  );
};

export default App;
