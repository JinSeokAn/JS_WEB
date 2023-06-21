export async function checkMemberInfo(userInfo){

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const data = JSON.stringify(userInfo);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };
  
  return await fetch("/user/login", requestOptions)
  .then( response => response.text())
  .then( result => {
    result = JSON.parse(result)
    console.log(result);
    if(result) {
        alert(`반갑습니다😍. ${result.memberName}님 로그인이 되었습니다.`)
        // window.location.href="/"
      
    }else {
      alert('정보가 없습니다. 아이디와 패스워드를 확인해주세요');
    }})
    .catch(error => console.log('error', error));
  };
