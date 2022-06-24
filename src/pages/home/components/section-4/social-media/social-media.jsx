import React from 'react';
import './social-media-style.scss';

const SocialMedia = ({icon,text,rating,count}) => {
  return (
    <div className='social-media-container'>
        <div className="top-3-1">
            <div className="top-3-1-1">
              {icon}
            </div>
            <div className="top-3-1-2">
              {text}
              <h3>
                {rating} <span>{count}</span>
              </h3>
            </div>
          </div>
    </div>
  )
}

export default SocialMedia