import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faPowerOff, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavUtils = ({isMo}) => {
  return (
      <>
       { !isMo &&
        <>
         <li><button><FontAwesomeIcon icon={faMagnifyingGlass} /><span className='srOnly'>검색</span></button></li>
         <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /><span className='srOnly'>장바구니</span></Link></li>
         <li><Link to="/login">로그인</Link></li>
        </>
       }
      { isMo &&
        <>
          <li><button><FontAwesomeIcon icon={faMagnifyingGlass} /><span className='srOnly'>검색</span></button></li>
          <li><Link to="/cart">장바구니</Link></li>
          <li><Link to="/login">로그인</Link></li>
        </>
      }
      </>
    
  
  )
};

export default NavUtils;