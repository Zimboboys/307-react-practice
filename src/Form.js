import { useState } from 'react';

const Form = props => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const submitForm = () => {
    props.addCharacter({ name: name, job: job });
    setName('');
    setJob('');
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text" name="name" id="name"
        value={name} onChange={e => setName(e.target.value)}
      />

      <label htmlFor="job">Job</label>
      <input
        type="text" name="job" id="job"
        value={job} onChange={e => setJob(e.target.value)}
      />

      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
