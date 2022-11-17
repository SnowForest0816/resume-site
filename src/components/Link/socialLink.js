import React, { useState, useEffect } from 'react';

const GITHUB = "Github";
const LINKEDIN = "Linkedin";
const FACEBOOK = "Facebook";

function SocialLink({link, addLink, removeLink, updateLink}) {
  
  const { increase, decrease } = link;

  const [name, setName] = useState('');
  const [siteValue, setSiteValue] = useState(GITHUB);

  useEffect(() => {
    updateLink({
      _id: link._id,
      actualLink: `https://${siteValue.toLowerCase()}/${name}`
    })
  }, [name, siteValue, link._id, updateLink]);

  function handleSiteUpdate (e) {
    setSiteValue(e.target.value);
  }

  return (
      <div id={link._id}>
        <select onChange={handleSiteUpdate} value={siteValue}>
          <option value={GITHUB}>GitHub</option>
          <option value={LINKEDIN}>Linkedin</option>
          <option value={FACEBOOK}>Facebook</option>
        </select>

        <input
          type="text"
          placeholder='Link'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        { decrease && <button onClick={() => removeLink(link._id)}>-</button> }
        { increase && <button onClick={addLink}>+</button> }
      </div>
  );
};

export default SocialLink;