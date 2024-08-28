const Pagination = ({ info, onPageChange, totalResult }) => {
  const { count, pages, next, prev } = info;
  const currentPage = next ? parseInt(next.split('=')[1]) - 1 : parseInt(prev.split('=')[1]) + 1;

  const isNearEnd = pages - currentPage < 2;

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-between bg-[#272b33] px-4 py-3 sm:px-6">
      <div className="flex flex-1 items-center sm:hidden">
        <p onClick={() => handlePageChange(currentPage - 1)} className=" cursor-pointer relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-primary-black hover:bg-primary-orange">Previous</p>
        <p className="text-white px-4 ">{currentPage} of {pages}</p>
        <p onClick={() => handlePageChange(currentPage + 1)} className=" cursor-pointer relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-primary-black hover:bg-primary-orange">Next</p>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {
              currentPage > 1 && (
                <div>
                  <p onClick={() => handlePageChange(1)} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] focus:z-20 focus:outline-offset-0 cursor-pointer hover:text-primary-black">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zM10.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L6.832 10l3.938 3.71a.75.75 0 01.02 1.06z" clipRule="evenodd" />
                    </svg>
                  </p>
                  <p onClick={() => handlePageChange(currentPage - 1)} className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] focus:z-20 focus:outline-offset-0 cursor-pointer hover:text-primary-black">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </p>
                </div>
              )
            }

            {pages > 5 ? (
              <div className="flex items-center">
                {isNearEnd ? (
                  <>
                    <span className="cursor-default relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                    {Array.from({ length: 3 }, (_, i) => pages - 2 + i).map((item, index) => (
                      <p key={index} onClick={() => handlePageChange(item)} className={`cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] hover:text-primary-black focus:z-20 focus:outline-offset-0 ${item === currentPage && "bg-primary-orange"}`}>{item}</p>
                    ))}
                  </>
                ) : (
                  <>
                    {Array.from({ length: 3 }, (_, i) => i + currentPage - 1).filter(item => item !== 0).map((item, index) => (
                      <p key={index} onClick={() => handlePageChange(item)} className={`cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] hover:text-primary-black focus:z-20 focus:outline-offset-0 ${item === currentPage && "bg-primary-orange"}`}>{item}</p>
                    ))}
                    <span className="cursor-default relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                    <p onClick={() => handlePageChange(pages)} className={`cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] hover:text-primary-black focus:z-20 focus:outline-offset-0 ${pages === currentPage && "bg-primary-orange"}`}>{pages}</p>
                  </>
                )}
              </div>
            ) : (
              <div>
                {Array.from({ length: pages }, (_, i) => i + 1).map((item, index) => (
                  <p key={index} onClick={() => handlePageChange(item)} className={`cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] hover:text-primary-black focus:z-20 focus:outline-offset-0 ${item === currentPage && "bg-primary-orange"}`}>{item}</p>
                ))}
              </div>
            )}

            {
              currentPage < 42 && 
              (
                <div>
                  <p onClick={() => handlePageChange(currentPage + 1)} className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] focus:z-20 focus:outline-offset-0 cursor-pointer hover:text-primary-black">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </p>
                  <p onClick={() => handlePageChange(pages)} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-[#ffe3c4] focus:z-20 focus:outline-offset-0 cursor-pointer hover:text-primary-black">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.21 5.23a.75.75 0 011.06-.02l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08L8.168 10 4.23 6.29a.75.75 0 01-.02-1.06zM9.21 5.23a.75.75 0 011.06-.02l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08L13.168 10 9.23 6.29a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </p>
                </div>
              )
            }
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;