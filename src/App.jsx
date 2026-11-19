import React, { useEffect, useState } from "react";
  import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'

const App = () => {
  const [dataapi, setDataapi] = useState([]);
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDataapi(data);
        });
      console.log("API is Workig ");
      setLoading(false)
    }, 3000);
  }, []);
  return (
    <div>

     {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-white/70">
          <TailChase
            size="70"
            speed="1.75"
            color="black"
          />
        </div>
      )}
      <div className="product-control w-full flex gap-5 flex-wrap">
        {dataapi.map((row) => (
          <div className=" w-[350px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300  border border-gray-100 ">
            
            {/* Image */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center h-72">
              <img
                src={row.image}
                alt="Fjallraven Backpack"
                className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category */}
              <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full uppercase tracking-wider">
                {row.category}
              </span>

              {/* Title */}
              <h2 className="mt-3 text-xl font-bold text-gray-900 leading-snug line-clamp-2">
                {row.title}
              </h2>
              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
                {row.description}
              </p>

              {/* Divider */}
              <div className="my-5 border-t border-gray-100"></div>

              {/* Price + Rating */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${row.price}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-full">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-800">
                    {row.rating.rate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>

  );
};

export default App;
