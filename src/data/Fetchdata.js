
import axios from "axios";
const url = "https://covid19.mathdro.id/api"

export const Fetchdata = async ()=> {
    try {
        const { data } = await axios.get(url);
        return data
    }
    catch (error){
        console.error(error);
    }
}


export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('${url}/daily');
      return data
      console.log(data)
  
    //   return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };
  