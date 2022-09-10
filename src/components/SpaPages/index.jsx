import React, { useState } from "react";
import data from "../../data/data.json";
import PageButtons from "./pageButtons";

const IntraPagePagination = () => {
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(2);

  const totalItems = data.length;
  const maxPage = Math.ceil(totalItems / postsPerPage);
  console.log(maxPage);

  const currentPosts = data.slice(
    (currentPage - 1) * postsPerPage,
    postsPerPage * currentPage
  );

  const nextpage = () => {
    if (currentPage === maxPage) return;
    setCurrentPage((prevState) => prevState + 1);
  };

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => prevState - 1);
  };

  const paginateFn = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className='flex flex-col gap-3 items-center justify-center bg-green-300'>
      {currentPosts.map((item, index) => (
        <div key={index}>{item.country}</div>
      ))}

      <PageButtons
        data={data}
        itemsPerPage={postsPerPage}
        paginate={paginateFn}
        next={nextpage}
        previous={previousPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default IntraPagePagination;
