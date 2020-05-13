import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us&inc=gender,name,location,email,phone,id,picture";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
