import Table from './Table';

const App = () => {
  const characters = [
    { name: "Charlie", job: "Janitor" },
    { name: "Mac", job: "Bouncer" },
    { name: "Dee", job: "Aspiring Actress" },
    { name: "Dennis", job: "Bartender" },
    { name: "Ethan", job: "Student" }
  ];

  return (
    <div className="container">
      <Table characterData={characters} />
    </div>
  );
};

export default App;
