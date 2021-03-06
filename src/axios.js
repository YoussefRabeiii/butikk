import axios from "axios";

const instance = axios.create({
  // HIS CLOUD FUNCTION
  baseURL: "https://us-central1-clone-afceb.cloudfunctions.net/api",

  // baseURL: "https://us-central1-butikkken.cloudfunctions.net/api", // Live Server (Cloud Function)

  // baseURL: "http://localhost:5001/butikkken/us-central1/api", // Local Server (Emulator)

  // headers: {
  // "Access-Control-Allow-Origin": "https://butikk.netlify.app",
  // "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "https://us-central1-butikkken.cloudfunctions.net",
  // },
});

export default instance;
