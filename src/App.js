import { React, useEffect, useState } from 'react';
import { v4 as uuids } from "uuid";
import Page from './components/Page/page';

import './assets/style/Style.scss';

function App() {

  const [experiences, setExperiences] = useState([{ increase: true, decrease: false, _id: uuids() }]);
  const [socialLinks, setSocialLinks] = useState([{ actualLink: "", increase: true, decrease: false, _id: uuids() }]);
  const [status, setStatus] = useState(true);

  const [pageContents, setPageContents] = useState([{
    links: socialLinks,
    experiences: experiences,
  }]);

  useEffect(() => {
    let linkIndex = 0, experienceIndex = 0;
    let pageNum = 0;
    let pages = [];
    let tempY = 0;

    pages.push({
      links: [],
      experiences: [],
    });

    while(linkIndex < socialLinks.length) {

      const pageLink = socialLinks[linkIndex];
      const pageY = getY(`page${pageNum}`);

      tempY = getY(pageLink._id, tempY, 25);

      if(tempY < pageY) {
        pages[pageNum].links.push(pageLink)
      } else {
        pageNum ++;
        pages.push({
          links: [pageLink],
          experiences: [],
        });
      }

      linkIndex ++;
    }

    while(experienceIndex < experiences.length) {

      const pageExperience = experiences[experienceIndex];
      const pageY = getY(`page${pageNum}`);
      
      tempY = getY(pageExperience._id, tempY, 67.33);

      if(tempY < pageY) {
        pages[pageNum].experiences.push(pageExperience)
      } else {
        pageNum ++;
        pages.push({
          links: [],
          experiences: [pageExperience],
        });
      }

      if(pageNum >= 1) {
        if(status === false) {
          if(pages[pageNum].links.length) {
            const removedLink = pages[pageNum].links.shift();
            pages[pageNum - 1].links.push(removedLink);
          } else if(pages[pageNum].experiences.length) {
            const removedExperience = pages[pageNum].experiences.shift();
            pages[pageNum - 1].experiences.push(removedExperience);
          }
        }
      }

      experienceIndex ++;
    }

    setPageContents(pages); 
  }, [socialLinks, experiences])

  function getY (id, tempY = 0, tempH = 0) {
    const element = document.getElementById(id);

    if(element === null)
      return tempY + tempH;

    const { y, height } = element.getBoundingClientRect()
    return y + height;
  }

  return (
    <div className='App'>
      {pageContents.map((pageContent, index) => 
        <Page
          key={index}
          pageNum={index}
          socialLinks={pageContent.links}
          experiences={pageContent.experiences}
          setSocialLinks={setSocialLinks}
          setExperiences={setExperiences}
          realLinks={socialLinks}
          realExperiences={experiences}
          setStatus={setStatus}
        />
      )}
    </div> 
  );
}

export default App;
