const TableHead = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
  </thead>
);

const TableBody = (props) => {
  const rows = props.characterData.map((c, i) => (
    <tr key={i}>
      <td>{c.name}</td>
      <td>{c.job}</td>
    </tr>
  ));

  return <tbody>{ rows }</tbody>;
};

const Table = (props) => (
  <table>
    <TableHead />
    <TableBody characterData={props.characterData} />
  </table>
);

export default Table;
