export async function checkMemberInfo(userInfo){
  const data = JSON.stringify(userInfo);
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };
  
  return await fetch("/user/login", requestOptions)
  .then( response => response.json())
  .then(result => {
    if(result) {
      console.log(result);
      } else {
        alert('아이디와 패스워드를 확인해주세요');
      }
    })
    .catch(error => console.log('error', error));
  };
