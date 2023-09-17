import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCarousel from "../../components/horizontal-carousel/HorizontalCarousel";

const Product = () => {
  const [limit, setLimit] = useState(5);
  const [products, setProducts] = useState([]);

  // const API_URL = `https://fakestoreapi.com/products?limit=${limit}`;
  // const API_URL = `https://api.quotable.io/random`;

  const [author, setAuthor] = useState("Einstein");
  const searchQueryUrl = `https://api.quotable.io/search/authors?query=${author}`;

  // fucntion to get product from API

  const fetchProducts = async () => {
    try {
      const response = await axios.get(searchQueryUrl);

      // console.log(response, 'response from fetchProducts')
      const { data } = response;
      console.log(data, "data from fetchProducts");
      // setProducts(data);
    } catch (error) {
      console.log(error, "error from fetchProducts");
    }
  };

  useEffect(() => {

    // debounce 1000ms to prevent too many request to API
    setTimeout(() => {
      fetchProducts();
    }, 1000);
  }, [author]);

  // console.log(products, 'products from API')

  return (
    <div>
      <div className="w-full h-full">
        {/* <HorizontalCarousel >
            {
                products?.map((item, index) => {
                  return (
                    <div key={index} className="carousel-item">
                      <div className="h-[350px] w-[250px]">
                        <div className="h-[50%] w-full">
                          <img src={item.image} alt={item.title} className='h-full w-full' />
                        </div>
                        <div className="h-1/2 w-full flex-1 bg-orange-400 flex flex-col ">
                          <h3 className="card-title">{item.title}</h3>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text">{item.price}</p>
                        </div>
                      </div>
                    </div>
                  );

                })
            }

          </HorizontalCarousel> */}
      </div>

      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setLimit(prev => prev + 5)
        }}
      >
        Load more 5 products
      </button> */}

      <div className="min-w-[300px] relative">
        <label
          htmlFor="email"
          className="cursor-pointer inline-block absolute left-4 top-0 -translate-y-2/4 bg-white p-2 z-10 text-sm font-medium"
        >
          E-mail
        </label>
        <input
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type="text"
          placeholder="example@gmail.com"
          id="email"
          className="bg-transparent outline-none text-sm font-medium border border-gray-200 rounded p-4 w-full focus:border-blue-500 transition-all pr-14"
        />
        <span className="absolute top-2/4 right-4 -translate-y-2/4 text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Product;
