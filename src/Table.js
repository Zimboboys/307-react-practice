const TableHead = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Remove</th>
    </tr>
  </thead>
);

const TableBody = props => {
  const rows = props.characterData.map((character, i) => (
    <tr key={i}>
      <td>{character.name}</td>
      <td>{character.job}</td>
      <td>
        <button onClick={() => props.removeCharacter(i)}>Delete</button>
      </td>
    </tr>
  ));

  return <tbody>{ rows }</tbody>;
};

const Table = props => (
  <table>
    <TableHead />
    <TableBody
      characterData={props.characterData}
      removeCharacter={props.removeCharacter}
    />
  </table>
);

export default Table;
