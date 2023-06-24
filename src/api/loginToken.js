import { onOrderCreate } from "./onOrderCreate";
import { updateHeaderToken } from "./updateHeaderToken";

 export const loginToken = (loginInfo) => {
  const raw = JSON.stringify(loginInfo);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: raw,
    redirect: 'follow'
  };
  fetch('/user/login', updateHeaderToken(requestOptions))
  .then(response => response.text())
  .then(res => {
    localStorage.setItem('accessToken', res);
    onOrderCreate(requestOptions)
    window.location.href = '/order';
    // localStorage.setItem('refreshToken', res)
    // localStorage.setItem('expiredTime', res)
    // setToken(res, requestOptions.headers)
  })
  .catch(error => console.log('error', error));
}



// https://velog.io/@h-young/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-jwt%EB%B0%A9%EC%8B%9D
//https://han-um.tistory.com/17
// https://www.daleseo.com/js-jwt/
// https://www.youtube.com/watch?v=nI8PYZNFtac