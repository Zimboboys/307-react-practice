import styles from './Table.module.css';

const TableHead = () => (
  <thead>
    <tr>
      <th width="35%">Name</th>
      <th width="20%">Job</th>
      <th>Remove</th>
    </tr>
  </thead>
);

const TableBody = props => {
  const rows = props.characterData.map((character, i) => (
    <tr key={i} className={styles.character}>
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
