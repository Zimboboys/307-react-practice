import { useState } from 'react';
import Table from './Table';

const App = () => {
  const [characters, updateCharacters] = useState([
    { name: "Charlie", job: "Janitor" },
    { name: "Mac", job: "Bouncer" },
    { name: "Dee", job: "Aspiring Actress" },
    { name: "Dennis", job: "Bartender" },
    { name: "Ethan", job: "Student" }
  ]);

  const removeCharacter = index => {
    updateCharacters(
      characters.filter((c, i) => i !== index)
    );
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeCharacter} />
    </div>
  );
};

export default App;
