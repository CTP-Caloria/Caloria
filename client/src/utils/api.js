
import axios from "axios";

export default{
    findUser:function(id){
        return axios.get(`/api/users/${id}`);
    }
};