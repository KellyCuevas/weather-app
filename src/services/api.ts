import axios from "./axios";

export const getPointsFromLocation = async (
  latitude: number,
  longitude: number,
) => {
  const response = await axios.get(`/points/${latitude},${longitude}`);
  return response.data;
};

export const getHourlyForecast = async (
  office: string,
  xPoint: number,
  yPoint: number,
) => {
  const response = await axios.get(
    `/gridpoints/${office}/${xPoint},${yPoint}/forecast/hourly`,
  );
  return response.data;
};
