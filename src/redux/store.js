import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

// 출처
// https://velog.io/@chaerin00/Redux-%EC%82%AC%EC%9A%A9%EB%B2%95-%EA%B8%B0%EC%B4%88-useState%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
export default store;