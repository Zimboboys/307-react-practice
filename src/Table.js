import styles from './Table.module.css';

const TableHead = () => (
  <thead>
    <tr>
      <th width="10%">id</th>
      <th width="35%">Name</th>
      <th width="20%">Job</th>
      <th>Remove</th>
    </tr>
  </thead>
);

const TableBody = props => {
  const rows = props.characterData.map(character => (
    <tr key={character.id} className={styles.character}>
      <td><em>{character.id}</em></td>
      <td>{character.name}</td>
      <td>{character.job}</td>
      <td>
        <button onClick={() => props.removeCharacter(character.id)}>Delete</button>
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
