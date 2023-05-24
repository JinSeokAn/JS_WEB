import axios from "axios";

export async function uploadLoginInfo(userInfo){
  
  console.log(userInfo);
  axios.post('/api/login', userInfo)
  .then(response => {
    // 로그인 성공 처리
    console.log(response.data);
  })
  .catch(error => {
    // 오류 처리
    console.error(error);
  });

  // data.append("file", userInfo)
  // // data.append("upload_preset", process.env.REACT_APP_NARS_PRESET);
 
  // return fetch(process.env.REACT_APP_NARS_URL, {
  //   method: "POST",
  //   body: data
  // })
  // .then( res => res.json())
  // .then( data => console.log(data) )
}
