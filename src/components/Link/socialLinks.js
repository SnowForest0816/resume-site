import React from "react";
import { v4 as uuids } from "uuid";
import SocialLink from "./socialLink";

function SocialLinks({socialLinks, setSocialLinks, realLinks, setStatus}) {

  const getStatus = (links, index) => {
    if(index === 0 && links.length === 1)
      return { increase: true, decrease: false };
    if(index === links.length - 1)
      return { increase: true, decrease: true };
    return { increase: false, decrease: true };
  }

  const updatedStatusLinks = (links) => {
    return links.map((link, index) => ({
      ...link,
      ...getStatus(links, index),
    }))
  }

  const addLink = (actualLink) => {
    const newLinks = updatedStatusLinks([...realLinks, { actualLink, _id: uuids() }]);
    setStatus(true);
    setSocialLinks(newLinks);
  }
  
  const removeLink = (id) => {
    const newLinks = updatedStatusLinks(realLinks.filter((link) => link._id !== id));
    setStatus(false);
    setSocialLinks(newLinks);
  }

  const updateLink = (newLink) => {
    const newLinks = updatedStatusLinks(realLinks.map((link) => link._id === newLink.id ? newLink : link));
    setStatus(true);
    setSocialLinks(newLinks);
  }

  return (
    <div>
      {socialLinks.map((link) => (
          <SocialLink
            link={link}
            key={link._id}
            addLink={addLink}
            removeLink={removeLink}
            updateLink={updateLink}
          />
        )
      )}
    </div>
  )
}

export default SocialLinks;
