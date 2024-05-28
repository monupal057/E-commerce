import React from "react";

const AllProductShim = () => {


  const arrayData = new Array(9).fill("");


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                arrayData.map((el, i)=>(
                    <div className="w-[90%] px-4 py-4 shadow-lg rounded-md">
                    <div className=" w-full h-[200px] bg-[#ccc] rounded-md "></div>
                    <div className="mt-4">
                      <h2 className="text-gray-900 h-[20px] w-[120px] bg-[#ccc] title-font text-lg font-medium mt-2 mb-2"></h2>
                      <span className="  text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 block  h-[20px] w-[40px] bg-[#ccc]"></span>
                      <div className="flex justify-between mt-3 flex-col sm:flex-row">
                        <p className="mt-1 mb-2 sm:mb-0 text-[15px] sm:text-[20px] font-bold text-gray-900 dark:text-white h-[20px] w-[80px] bg-[#ccc]"></p>
                        <button className="focus:ring-4 focus:ring-blue-300 font-m rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 h-[25px] w-[80px] bg-[#ccc]"></button>
                      </div>
                    </div>
                  </div>
                ))
            }
        
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProductShim;
