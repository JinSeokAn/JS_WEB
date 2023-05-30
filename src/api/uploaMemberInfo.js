
export async function uploadNewMember(userInfo){
 
  return fetch('https://login-99bcf-default-rtdb.asia-southeast1.firebasedatabase.app', {
    method: "POST",
    body: userInfo
  })
  .then( res => res.json())
  .then( data => console.log(data) )
}
