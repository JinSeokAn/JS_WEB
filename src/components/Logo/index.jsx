import React from 'react';
import { Link } from 'react-router-dom';

import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = ({color}) => {
  const styleObj = {
    color,
    width: '100px',
    fontSize: '1.6rem',
    fontWeight: 'bold'
  }
  return(
    <Link style={styleObj} to="/">JS <FontAwesomeIcon icon={faStore} /><span className='sr-only'>Shop</span></Link>
  )
};

export default Logo;