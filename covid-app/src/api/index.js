import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchdata = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedresponse = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    };
    return modifiedresponse;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
  } catch (error) {}
};
