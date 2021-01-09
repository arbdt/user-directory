import axios from "axios";
// this file is for calling the randomuser API via axios
const API = {
  // pull a set of users from randomuser.me
  generateUser() {
    return axios.get("https://randomuser.me/api/?results=100&nat=au");
  }
}

// export module
export default API;
