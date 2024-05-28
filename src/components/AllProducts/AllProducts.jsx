import { useEffect, useState } from "react";
import axios from "axios";
import login from "../../assets/login.png";
import { Link } from "react-router-dom";
import AllProductShim from "../AllProductShimmer/AllProductShim";

const AllProducts = ({ AddToCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  const [allCategory, setAllCategory] = useState([]);

  const [selectProducts, setSelectProducts] = useState("");

  const [searchItem, setSearchItem] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // AllProducts

  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllProducts(res.data.products);
      setOriginalProducts(res.data.products);
    };

    AllProducts();
  }, []);

  // //// product category
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProductsCategory();
  }, []);

  const filterProducts = (selectcategory) => {
    setSelectProducts(selectcategory);

    const data = selectcategory
      ? originalProducts.filter(
          (filterItem) => filterItem.category === selectcategory
        )
      : originalProducts;
    setAllProducts(data);
  };

  // search products

  const handleSearchItem = () => {
    const searchProduct = originalProducts.filter((searchFilterItem) =>
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setAllProducts(searchProduct);
  };

  // price filter

  const handlePrice = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);

    const filterPrice = originalProducts.filter(
      (priceItem) =>
        (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    );

    setAllProducts(filterPrice);
  };

  return (
    <>
      <>
        <div className="relative">
          <img
            src={login}
            alt=""
            className=" object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className=" absolute top-[40%] left-[10%] text-white font-semibold  text-3xl md:text-5xl">
            All Products
          </h2>
        </div>

        <div className="bg-[#e2e0e0] container mx-auto rounded-md py-3 mt-4">
          {/* products category section */}
          <div className=" text-center  mt-4">
            <select
              onChange={(e) => filterProducts(e.target.value)}
              className="border py-2 px-4 rounded-md"
            >
              <option>Filter by Category</option>

              {allCategory.slice(0, 6).map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* product search */}

          <div className="text-center mt-3 text-2xl flex items-center justify-center md:flex-row flex-col gap-3 ">
            <input
              className="block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
            <button
              className=" py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleSearchItem}
            >
              Search Product
            </button>
          </div>

          {/* product filter by Price */}

          <div className=" text-center mt-4 mb-2 flex justify-center items-center md:flex-row flex-col gap-3">
            <input
              placeholder="Min Price"
              className=" px-2 py-2 rounded-md"
              onChange={(e) => setMinPrice(e.target.value)}
              value={minPrice}
            />

            <input
              placeholder="Max Price"
              className=" px-2 py-2  rounded-md"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
            />

            <button
              className="py-2.5 px-5 me-2 mb-2 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handlePrice}
            >
              Filter by price
            </button>
          </div>
        </div>

        {
          !allProducts.length? (<AllProductShim />):( <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* map  start*/}
              {allProducts.map((AllItems) => (
                <div
                  className="w-[90%] px-4 py-4 shadow-lg rounded-md"
                  key={AllItems.id}
                >
                  <Link
                    className="block relative h-48 rounded overflow-hidden"
                    to={`/singleProduct/${AllItems.id}`}
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block rounded-t-lg"
                      src={AllItems.thumbnail}
                    />
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium mt-2 mb-2">
                      {AllItems.title}
                    </h2>
                    <span className=" bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
                      {AllItems.rating}
                    </span>
                    <div className="flex justify-between mt-3 flex-col sm:flex-row">
                      <p className="mt-1 mb-2 sm:mb-0 text-[15px] sm:text-[20px] font-bold text-gray-900 dark:text-white">
                        Price: {AllItems.price} Rs.
                      </p>
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-m rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => AddToCart(AllItems)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

          )
        }

       

        {/* all products */}
       
      </>
    </>
  );
};

export default AllProducts;
