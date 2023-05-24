import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextStore } from 'context/store';
import { logout } from 'api/firebase';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

//components
import Avatar from 'components/Avatar';

const NavUtils = ({isMo}) => {
  const contextValue = useContext(ContextStore)
  // console.log(contextValue.user[0]);
  return (
      <>
        { !isMo &&
          <>
          <li><button><FontAwesomeIcon icon={faMagnifyingGlass} /><span className='srOnly'>검색</span></button></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /><span className='srOnly'>장바구니</span></Link></li>
          { !contextValue.user[0] && <li><Link to="/login">로그인</Link></li> }
          { contextValue.user[0] && 
            <>
              <li><Avatar user={contextValue.user[0]} /></li>
              <li><Link to="" onClick={logout}>로그아웃</Link></li>
            </>
          }
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