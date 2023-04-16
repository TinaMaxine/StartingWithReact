import React from 'react';

export default function LiItem(props) {
  return (
    <li className='li-f' >
      <div className='li-icon'>{props.children}</div>
      <span className='li-span' >{props.text}</span>
    </li>
  );
}
// style={{ paddingLeft: '15px' }}
// className='li-f' style={{ listStyleType: 'none', display: 'flex',justifyContent:"flex-start", alignItems: 'center',paddingLeft:'100px', paddingBottom: '35px',fontSize:'19px' }}
