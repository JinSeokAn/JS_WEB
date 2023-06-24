import { updateHeaderToken } from "./updateHeaderToken";

export const onOrderCreate = (header) => {
  // console.log(header);
  fetch('/order/create', updateHeaderToken(header))
  .then(response => response.text())
  .then(res => {
    console.log(res);
  })
  .catch(error => console.log('error', error));

}