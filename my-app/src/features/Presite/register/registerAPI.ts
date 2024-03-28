import axios from "axios";
export function registerAPI(credentials: { username: string; password: string; first_name:string, last_name:string, email:string }) {

    
    const MY_SERVER ="https://theradash.onrender.com/register/"
  return axios.post(MY_SERVER,credentials)
}

