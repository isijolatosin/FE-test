function DestinationCard({ category, destination }) {
  // TRUNCATING THE DESCRIPTION TEXT WITH THIS LOGIC
  const truncate = (str, length) => {
    if (str.length > length) {
      let subStr = str.substring(0, length);
      return subStr + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='relative rounded-md flex flex-col m-5 bg-gray-100 z-30 h-96'>
      <p className='absolute top-1 right-2 text-xs italic text-blue-500'>
        Destination: {destination}
      </p>
      <p className='text-md text-gray-200 bg-blue-500 w-full p-3 pl-5 mt-5'>
        Category: {category.categoryName}
      </p>
      <p className='text-md bg-gray-200 text-gray-700 w-full pb-2 pl-5'>
        Sub-category:{' '}
        {category.subCategories.map((objects, objectsIdx) => (
          <span key={objectsIdx}>
            {objects.subCategoryName}
            {', '}
          </span>
        ))}
      </p>
      <div className='overflow-y-scroll  overflow-hidden text-xs text-gray-700 w-full pl-3 '>
        {category.subCategories.map((objects) => {
          return objects.excursions.map((excursion, excursionIdx) => (
            <div key={excursionIdx}>
              <div>
                <span className='sticky top-0 bg-gray-100 width-full block p-2'>
                  Excursion-Name:{' '}
                  <span className='font-semibold text-blue-400'>
                    {excursion.excursionFullName}
                  </span>
                </span>
                <div className='flex justify-between mb-2 pl-2	'>
                  <img
                    className='rounded-sm rounded-br-3xl'
                    width='150'
                    src={excursion.excursionImages.ImgThumbnails}
                    alt='Excursion-thumb'
                  />
                  <span className='ml-2'>
                    {truncate(excursion.excursionShortDescription, 100)}
                  </span>
                </div>
              </div>
            </div>
          ));
        })}
      </div>
    </div>
  );
}

export default DestinationCard;
