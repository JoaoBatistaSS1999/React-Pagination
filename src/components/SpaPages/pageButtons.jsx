import React from "react";

const PageButtons = ({
  data,
  itemsPerPage,
  paginate,
  next,
  previous,
  currentPage,
}) => {
  const totalItems = data.length;
  const pages = Math.ceil(totalItems / itemsPerPage);
  const pageNumber = [];

  for (let i = 1; i <= pages; i++) {
    pageNumber.push(i);
  }

  return (
    <nav className='bg-blue-400'>
      <ul className='flex gap-2 p-3'>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => previous()}
            className='bg-white w-full h-full disabled:bg-black'>
            ⏪
          </button>
        </li>

        {pageNumber.map((item) => (
          <li
            className={`border-[1px] bg-${
              item === currentPage ? "blue-400" : "white"
            } w-8 flex justify-center  border-white`}
            key={item}>
            <button className=' w-full h-full' onClick={() => paginate(item)}>
              {item}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage === pages}
            onClick={() => next()}
            className='bg-white w-full h-full disabled:bg-black'>
            ⏩
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default PageButtons;
