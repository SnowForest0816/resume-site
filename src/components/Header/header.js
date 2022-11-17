import React from 'react';

import '../../assets/style/Style.scss';

function Header() {
  return(
    <div>
      <div className='personal_info'>
        <div className='personal_info-left'>
          <div className='name'>
            <input type="text" placeholder='Cristian' onChange={(e) => e.target.style.width = `${((e.target.value.length + 1) * 13)}px`} />
            <input type="text" placeholder='Vice' onChange={(e) => e.target.style.width = `${((e.target.value.length + 1) * 13)}px`} />
          </div>
          <div className='info'>
            <div className='info_element'>
              <label className='label'>Email</label>
              <input type="text" placeholder='Email' />
            </div>
          </div>
        </div>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Header;
