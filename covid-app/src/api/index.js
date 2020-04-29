import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchdata = async (country) => {
  let changeableurl = url;
  if (country) {
    changeableurl = `${url}/countries/${country}`;
  }
  try {
    const { data } = await axios.get(changeableurl);
    const modifiedresponse = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedresponse;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifieddata = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifieddata;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
