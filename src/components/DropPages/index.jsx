import { useState } from "react";
import data from "../../data/data.json";

/**All content is pre-loaded from the get go, but the user can only see a portion of it. By click "load more" the content can expand chunk by chunk.*/
const DropPages = () => {
  const postsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(2);

  const totalItems = data.length;
  const maxPage = Math.ceil(totalItems / postsPerPage);
  console.log(maxPage);

  const currentPosts = data.slice(0, postsPerPage * currentPage);

  const addMoreData = () => {
    if (currentPage === maxPage) return;
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <div className='w-full flex flex-col items-center p-10 gap-10 justify-center'>
      <section className='flex flex-wrap justify-center items-center gap-5 w-[70%]'>
        {currentPosts.map((item, index) => (
          <div className='p-3  border-2 border-black' key={index}>
            {item.country}
          </div>
        ))}
      </section>

      {currentPage !== maxPage ? (
        <button onClick={addMoreData} className='p-2 bg-slate-400'>
          Show more
        </button>
      ) : (
        <button onClick={() => setCurrentPage(1)} className='p-2 bg-slate-400'>
          hide
        </button>
      )}
    </div>
  );
};
export default DropPages;
