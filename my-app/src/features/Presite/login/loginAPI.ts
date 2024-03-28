import axios, { AxiosError, AxiosResponse } from 'axios';
export function login(credentials: { username: string; password: string }) {

    
    let MY_SERVER ="https://theradash.onrender.com/login/"
  return axios.post(MY_SERVER,credentials)
}


export function forgotPassAPI(credentials: {username: string}) {
    let MY_SERVER = "https://theradash.onrender.com/sendResetEmail/"
  return axios.post(MY_SERVER, credentials)
}


interface ResetPasswordResponse {
  success: boolean;
  message: string;
}


export async function resetPassAPI(credentials: { username: string; id: number; new_password: string }): Promise<AxiosResponse<ResetPasswordResponse>> {
  const MY_SERVER = 'https://theradash.onrender.com/reset-password';
  const config = {
  };

  try {
    const response = await axios.patch(`${MY_SERVER}/${credentials.id}/`, credentials, config);
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    console.error('Error in Reset Password:', error);


    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      console.error('Response Data:', responseData);
    }

    throw error;
  }
}