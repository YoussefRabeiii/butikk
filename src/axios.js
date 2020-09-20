import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-butikkken.cloudfunctions.net/api", // Live Server (Cloud Function)

  // baseURL: "http://localhost:5001/butikkken/us-central1/api", // Local Server (Emulator)

  // headers: {
  //   //   // "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  //   //   "Access-Control-Allow-Origin": "https://us-central1-butikkken.cloudfunctions.net",
  // },
});

export default instance;
