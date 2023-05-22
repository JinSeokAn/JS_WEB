import React, { useContext } from 'react';
import { ContextStore } from 'context/store';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "150px"
  },
}
const User = () => {
  //useContext를 사용해서 Store를 등록해줍니다.
  const contextValue = useContext(ContextStore)
  console.log(contextValue);
  
    return (
        <div style={style.container}>
            이름 : {contextValue.user[0]}<br />
            나이 : {contextValue.testInfo.name}
        </div>
    );
}

export default User;