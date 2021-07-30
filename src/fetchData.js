import axios from 'axios';

export const sunwingLogo =
  'data:image/png;base64,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';
export const fetchData = () => {
  return axios
    .get(
      'https://hotelinfoservice.sunwingtravelgroup.com/en/AllHotelDestinationList'
    )
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
};

export const fetchDataCategory = (countryName, destination) => {
  return axios
    .get(
      `https://hotelinfoservice.sunwingtravelgroup.com/1/en/excursionsCountryDestination/${countryName}/${destination}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
};