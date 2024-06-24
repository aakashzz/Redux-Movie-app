import React, { useState, useRef, useEffect } from "react";
import api from "../../service/apiHandle";
import config from "../../config/config";
import { useDispatch } from "react-redux";
import { dataCatch } from "../../store/apiResponseSlice";
import MovieListing from "../MovieListing/MovieListing";
import Loader from "../Loader";
function Home() {
   const MovieName = useRef();
   const MovieType = useRef();

   const dispatch = useDispatch();
   const options = ["Movie", "Series", "Episode"];
   async function dataSubmit() {
      try {
         return await api
            .get(
               `/?apikey=${config.apiKey}&s=${MovieName.current.value}&type=${MovieType.current.value}`
            )
            .then((data) => {
               dispatch(dataCatch(data.data.Search));
            })
            .catch(()=> <Loader /> );
      } catch (error) {
         console.log(error.message);
      }
   }

   return (
      <main className="h-full w-full ">
         <div className="w-full py-4">
            <div className="flex justify-center gap-3 items-center">
               <input
                  type="text"
                  className=" w-96 rounded-lg outline-none text-lg px-4 py-1.5 font-Inter font-light"
                  placeholder="Enter Movie Name"
                  ref={MovieName}
               />
               <select
                  name=""
                  id=""
                  className="py-2 outline-none rounded-lg px-2 font-Inter"
                  ref={MovieType}
               >
                  {options.map((option) => (
                     <option key={option} value={option}>
                        {option}
                     </option>
                  ))}
               </select>
               <button
                  onClick={dataSubmit}
                  className="bg-red-500 text-white px-3 py-1.5 font-Inter rounded-lg"
               >
                  Submit
               </button>
            </div>
         </div>
         <div className="">{<MovieListing />}</div>
      </main>
   );
}

export default Home;
Home;
