import React from 'react';
import CountryCard from './CountryCard';

function Countries({ countriesInfo }) {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (countriesInfo.length < 1) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [countriesInfo]);

  return (
    <div className='bg-blue-100 pt-5 pb-5 max-w-screen-2xl mx-auto mt-10'>
      <h1 className='text-blue-500 font-semibold ml-5 mb-5'>
        Find your perfect excursion!
      </h1>
      {isLoading && (
        <div className='pl-5 text-green-500 italic pt-3'>
          <h1>Loading data...</h1>
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
        <div className='border-r-2 border-gray-300 ml-5 mb-10'>
          {countriesInfo.slice(0, 4).map((country) => (
            <CountryCard
              key={country.countryName}
              id={country.countryName}
              countryInfo={country}
            />
          ))}
        </div>
        <div className='border-r-2 border-gray-300 ml-5 mb-10 '>
          {countriesInfo.slice(4, 7).map((country) => (
            <CountryCard
              key={country.countryName}
              id={country.countryName}
              countryInfo={country}
            />
          ))}
        </div>
        <div className='border-r-2 border-gray-300 ml-5 mb-10'>
          {countriesInfo.slice(7, 10).map((country) => (
            <CountryCard
              key={country.countryName}
              id={country.countryName}
              countryInfo={country}
            />
          ))}
        </div>
        <div className='border-r-2 border-gray-300 ml-5 mb-10'>
          {countriesInfo.slice(10, 11).map((country) => (
            <CountryCard
              key={country.countryName}
              id={country.countryName}
              countryInfo={country}
            />
          ))}
        </div>
        <div className='border-r-2 border-gray-300 ml-5 mb-10'>
          {countriesInfo.slice(11, 12).map((country, countryIdx) => (
            <CountryCard
              key={country.countryName}
              id={country.countryName}
              countryInfo={country}
            />
          ))}
        </div>
        <div className=' ml-5 mb-10'>
          {countriesInfo.slice(12, 16).map((country) => (
            <CountryCard
              key={country.countryName}
              id={country.countryName}
              countryInfo={country}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Countries;
