import React, { useRef } from 'react';

import Header from '../Header/header';
import Experience from '../Experience/experiences';
import Link from '../Link/socialLinks';

import '../../assets/style/Style.scss';

function Page({
  socialLinks,
  setSocialLinks,
  experiences,
  setExperiences,
  pageNum,
  updatePages,
  realLinks,
  realExperiences,
  setStatus,
}) {

  return(
    <div id={`page${pageNum}`} className='container'>
      {pageNum === 0 ?
        <Header /> : null
      }
      {socialLinks.length ? 
        <div className='social_links'>
          <div className='title'>SOCIAL LINK</div>      
          <Link 
            socialLinks={socialLinks}
            setSocialLinks={setSocialLinks}
            updatePages={updatePages}
            realLinks={realLinks}
            setStatus={setStatus}
          />
        </div> : null
      }
      {experiences.length ?
        <div className='experiences'>
          <div className='title'>EXPERIENCE</div>
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
            updatePages={updatePages}
            realExperiences={realExperiences}
            setStatus={setStatus}
          />
        </div> : null
      }
      <div id='position_div'></div>
    </div>
  );
};

export default Page;
