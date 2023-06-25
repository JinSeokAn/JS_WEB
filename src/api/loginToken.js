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
    checkTokenExpiration()
    onOrderCreate(requestOptions)
    // window.location.href = '/order';
    // localStorage.setItem('refreshToken', res)
    // localStorage.setItem('expiredTime', res)
    // setToken(res, requestOptions.headers)
  })
  .catch(error => console.log('error', error));
}

const checkTokenExpiration =  () => {
  const token = localStorage.getItem('accessToken'); // JWT 토큰을 로컬 스토리지에서 가져옴
  if (token) {
    const decodedToken = decodeToken(token);
    const expirationTime = decodedToken.exp;
    const getRefreshToken = setInterval(() => {
      let currentTime = Math.floor(Date.now() / 1000);
      console.log(expirationTime- currentTime);
      if (expirationTime- currentTime < 30 ){
        try {
          console.log('test');
          // const refreshToken =  localStorage.getItem('refreshToken'); // RefreshToken을 로컬 스토리지에서 가져옴
          // const response = axios.post('/api/refreshToken', { refreshToken });
          // const newToken = response.data.token;
  
          // 새로 발급받은 JWT 토큰을 로컬 스토리지에 저장
          // localStorage.setItem('token', newToken);
          clearInterval(getRefreshToken)
        } catch (error) {
          // RefreshToken 요청 실패
          console.error('RefreshToken 요청 실패:', error);
        }
      }
    }, 1000);

   
  }
};

const decodeToken = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};


// https://velog.io/@h-young/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-jwt%EB%B0%A9%EC%8B%9D
//https://han-um.tistory.com/17
// https://www.daleseo.com/js-jwt/
// https://www.youtube.com/watch?v=nI8PYZNFtac