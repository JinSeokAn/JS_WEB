
export async function uploadNewMember(userInfo){
  const data = new FormData();
  data.append("file", userInfo)
  data.append("upload_preset", process.env.REACT_APP_NARS_PRESET);
 
  return fetch(process.env.REACT_APP_NARS_URL, {
    method: "POST",
    body: data
  })
  .then( res => res.json())
  .then( data => console.log(data) )
}
