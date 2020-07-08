
import axios from "axios";

export const Fetchdata = async ()=> {
    try {
        const response = await axios.get(" https://covid19.mathdro.id/api");
        return response
    }
    catch (error){
        console.error(error);
    }
}
    
  