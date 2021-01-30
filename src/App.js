import { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
  const [characters, updateCharacters] = useState([]);

  let pathname = ''
  if (window.location.search)
    pathname = window.location.search;
  else if (window.location.pathname)
    pathname = window.location.pathname;

  useEffect(() => {
    fetch(`http://localhost:5000/users${pathname}`)
      .then(res => res.json())
      .then(data => updateCharacters(data.users_list))
    .catch(err => console.error(err));
  }, [pathname]);

  const postCharacter = character => {
    return fetch('http://localhost:5000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character)
      })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
        return false;
      });
  };

  const addCharacter = character => {
    postCharacter(character)
    .then(res => {
      if (res.success) updateCharacters([...characters, res.newCharacter]);
    });
  };

  const removeCharacter = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.status === 204) updateCharacters(characters.filter(c => c._id !== id));
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h1>Job Directory</h1>
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <Form addCharacter={addCharacter} />
    </div>
  );
};

export default App;
