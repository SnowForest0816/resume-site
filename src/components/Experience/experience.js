import { React, useState, useEffect } from 'react';

import '../../assets/style/Style.scss';

function Experience({experience, addExperience, removeExperience, updateExperience}) {
  const { increase, decrease } = experience;

  const [name, setName] = useState('');
  const [jobValue, setJobValue] = useState('Accountant');

  useEffect(() => {
    updateExperience({
      _id: experience._id,
      actualJob: `${jobValue}`
    })
  }, [jobValue, experience._id, updateExperience]);

  function handleJobUpdate (e) {
    setJobValue(e.target.value);
  }
  return (
    <div id={experience._id}>
      <div className='experience_btn'>
        { decrease && <button onClick={() => removeExperience(experience._id)}>-</button>}
        { increase && <button onClick={addExperience}>+</button> }
      </div>
      <div className='experience_role'>
        <input 
          type="text" 
          placeholder='Company Name'
          value={name}
          onChange={(e) => setName(e.target.value)}  
        />
        <div>
          <input type="date" placeholder='start_date' />
          <input type="date" placeholder='end_date' />
        </div>
      </div>
      <select onChange={handleJobUpdate} value={jobValue}>
        <option value="Accountant">Accountant</option>
        <option value="Software">Software Engineer</option>
        <option value="Frontend">Frontend Developer</option>
        <option value="Backend">Backend Developer</option>
      </select>
    </div>
  );
};

export default Experience;