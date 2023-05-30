import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/user/login', userData);
    // API 요청 성공 시 처리할 로직 작성
    console.log(response.data); // 응답 데이터 출력 예시
  } catch (error) {
    // API 요청 실패 시 처리할 로직 작성
    console.error(error);
  }
};