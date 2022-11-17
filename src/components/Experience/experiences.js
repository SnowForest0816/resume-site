import { v4 as uuids } from "uuid";
import { React } from 'react';

import Experience from './experience';

function Experiences({experiences, setExperiences, realExperiences, setStatus}) {

  const getStatus = (experiences, index) => {
    if (index === 0 && experiences.length === 1)
      return { increase: true, decrease: false };
    if (index === experiences.length - 1)
      return { increase: true, decrease: true };
    return { increase: false, decrease: true };
  }

  const updatedStatusExperience = (experiences) => {
    return experiences.map((item, index) => ({
      ...item,
      ...getStatus(experiences, index),
    }))
  }

  const addExperience = () => {
    const newExperiences = updatedStatusExperience([...realExperiences, { _id: uuids() }]);
    setStatus(true);
    setExperiences(newExperiences);
  }

  const removeExperience = (id) => {
    const newExperiences = updatedStatusExperience(realExperiences.filter((item) => item._id !== id));
    setStatus(false);
    setExperiences(newExperiences);
  }

  const updateExperience = (newExperience) => {
    const newExperiences = updatedStatusExperience(realExperiences.map((item) => item._id === newExperience._id ? newExperience : item));
    setStatus(true);
    setExperiences(newExperiences);
  }
  return (
      <div>
        {experiences.map((item) => (
          <Experience
            experience={item}
            key={item._id}
            addExperience={addExperience}
            removeExperience={removeExperience}
            updateExperience={updateExperience}
          />
        ))}
      </div>
  );
};

export default Experiences;