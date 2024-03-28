
import axios from "axios"

const MY_SERVER ="https://theradash.onrender.com/patients/"






const getPatient = async (token: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(MY_SERVER, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const createPatient = async (token: any, patientData: any) => {
  console.log('Creating a new patient...');
  console.log('Patient Data:', patientData); 

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.post(MY_SERVER, patientData, config);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in createPatient:', error);


    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      console.error('Response Data:', responseData);
    }

    throw error; 
  }
};

const updatePaitentAPI = async (token: any, patientData: any) => {
  console.log(patientData.id);
  
  console.log('Patient Data:', patientData); 

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.patch(`${MY_SERVER}${patientData.id}/`, patientData, config);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in Update patient:', error);


    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      console.error('Response Data:', responseData);
    }

    throw error; 
  }
};


const cancelPatientAPI = async (token: any, patientData: any,patientId: number,) => {
  console.log(patientData)
  console.log(patientId);
  
  
  console.log('Patient Data:', patientData); 

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.patch(`${MY_SERVER}${patientId}/cancel/`, patientData, config);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in Update patient:', error);


    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      console.error('Response Data:', responseData);
    }

    throw error;
  }
};

export { getPatient, createPatient, updatePaitentAPI,cancelPatientAPI };