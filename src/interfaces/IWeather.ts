
export interface IWeather{
  location: { name: string; localtime: string };
current: {
temp_c: string;
temp_f: string;
condition: { text: string; icon: string; code: string };
wind_kph: string;
wind_mph: string;
cloud: string;
humidity: string;
};
}