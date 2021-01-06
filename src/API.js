import axios from "axios";

class API {
  // pull a set of users from randomuser.me
  generateUser() {
    return axios.get("https://randomuser.me/api/?results=100&nat=au");
  }
}

// export module
export default API;
