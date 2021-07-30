import { Link } from 'react-router-dom';

function CountryCard({ countryInfo }) {
  return (
    <div className='mb-5'>
      <h1 className='text-lg font-semibold'>{countryInfo.countryName}</h1>
      {countryInfo.destinations.map((item, itemIdx) => (
        <ol
          key={itemIdx}
          className='font-medium text-gray-500 underline cursor-pointer'
        >
          <Link
            to={{
              pathname: '/destination',
              state: {
                countryName: countryInfo.countryName,
                destination: item,
              },
            }}
          >
            <li>{item}</li>
          </Link>
        </ol>
      ))}
    </div>
  );
}

export default CountryCard;
