import React from 'react';
import { useLocation } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import { fetchDataCategory } from './fetchData';

function Destination() {
  const location = useLocation();
  const { countryName, destination } = location.state;
  const [isLoading, setIsLoading] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [input, setInput] = React.useState({
    category: '',
    subCategory: '',
    excursionFullName: '',
  });

  React.useEffect(() => {
    fetchDataCategory(countryName, destination)
      .then((results) => {
        setCategories(results);
      })
      .catch((error) => alert('No Response from the Server'));
  }, [countryName, destination]);

  // Handling first letter to uppercase
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  const handleChangeCategory = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      category: titleCase(e.target.value),
    });
  };
  const handleChangeSubCategory = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      subCategory: titleCase(e.target.value),
    });
  };
  const handleChangeExcursionFullName = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      excursionFullName: titleCase(e.target.value),
    });
  };

  const handleSubmit = () => {
    let newCategoryArr = [];
    if (
      input.category !== '' &&
      input.subCategory === '' &&
      input.excursionFullName === ''
    ) {
      categories.filter((category) => {
        if (category.categoryName.includes(input.category)) {
          newCategoryArr.push(category);
        }
        setInput({
          category: '',
          subCategory: '',
          excursionFullName: '',
        });
        return setCategories(newCategoryArr);
      });
    } else if (
      input.category === '' &&
      input.subCategory !== '' &&
      input.excursionFullName === ''
    ) {
      categories.filter((category) => {
        if (
          category.subCategories.map((subCategory) => {
            if (subCategory.subCategoryName.includes(input.subCategory)) {
              newCategoryArr.push(category);
            }
            return newCategoryArr;
          })
        )
          setInput({
            category: '',
            subCategory: '',
            excursionFullName: '',
          });
        return setCategories(newCategoryArr);
      });
    } else if (
      input.category === '' &&
      input.subCategory === '' &&
      input.excursionFullName !== ''
    ) {
      categories.filter((category) => {
        if (
          category.subCategories.map((subCategory) => {
            return subCategory.excursions.map((excursion) => {
              if (excursion.excursionFullName.includes(input.excursionFullName))
                newCategoryArr.push(category);
              return newCategoryArr;
            });
          })
        )
          setInput({
            category: '',
            subCategory: '',
            excursionFullName: '',
          });
        return setCategories(newCategoryArr);
      });
    }
  };

  React.useEffect(() => {
    if (categories.length < 1) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [categories]);

  return (
    <div>
      <div className='bg-gray-100 p-5 flex flex-col md:flex-row md:items-center max-w-screen-2xl mx-auto mt-5 '>
        <div className='flex flex-col md:flex-row lg:w-4/5'>
          <div className='relative mr-3 w-full'>
            <span className='absolute -top-3 font-semibold left-2 pl-1 pr-1 text-xs pt-1 bg-gray-100 text-blue-500'>
              Category
            </span>
            <input
              onChange={handleChangeCategory}
              value={input.category}
              placeholder='Search...'
              className='border bg-transparent w-full border-gray-400 p-2 rounded-md outline-none mb-3 pl-3 text-sm '
              type='text'
            />
          </div>
          <div className='relative mr-3 w-full'>
            <span className='absolute -top-3 font-semibold left-2 pl-1 pr-1 text-xs pt-1 bg-gray-100 text-blue-500'>
              Sub-Category
            </span>
            <input
              onChange={handleChangeSubCategory}
              value={input.subCategory}
              placeholder='Search...'
              className='border bg-transparent border-gray-400 mr-3 p-2 rounded-md outline-none w-full mb-3 pl-3 text-sm'
              type='text'
            />
          </div>
          <div className='relative mr-3 w-full'>
            <span className='absolute -top-3 font-semibold left-2 pl-1 pr-1 text-xs pt-1 bg-gray-100 text-blue-500'>
              Excursion Full Name
            </span>
            <input
              autoCorrect='off'
              autoComplete='off'
              onChange={handleChangeExcursionFullName}
              value={input.excursionFullName}
              placeholder='Search...'
              className='border bg-transparent border-gray-400 p-2 rounded-md outline-none w-full mb-3 pl-3 text-sm'
              type='text'
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className='bg-blue-500 w-full mt-3 text-white p-2 pr-5 pl-5 rounded-md max-w-screen-xl mx-auto md:w-1/5 md:mt-0 md:mb-3 text-sm'
        >
          Submit
        </button>
      </div>
      {isLoading && (
        <div className='pl-5 text-green-500 italic pt-3 max-w-screen-2xl pb-5 w-full bg-gray-100 mx-auto'>
          <h1>Loading data...</h1>
        </div>
      )}
      <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl mx-auto'>
        {categories.map((category, categoryIdx) => (
          <DestinationCard
            key={categoryIdx}
            category={category}
            destination={destination}
          />
        ))}
      </div>
    </div>
  );
}

export default Destination;
