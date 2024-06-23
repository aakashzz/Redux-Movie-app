import React, { useState, useRef, useEffect } from "react";
import api from "../../service/apiHandle";
import config from "../../config/config";
import { useDispatch } from "react-redux";
import { dataCatch } from "../../store/apiResponseSlice";

function Home() {
   const [MovieName, setMovieName] = useState();
   const [MovieType, setMovieType] = useState();
    const dispatch = useDispatch();
   async function dataSubmit() {
      try {
         return await api
            .get(`/?apikey=${config.apiKey}&s=${MovieName}&type=${MovieType}`)
            .then((data) => dispatch(dataCatch(data.data.Search)) )
            .catch((error) => console.log(error));
      } catch (error) {
         console.log(error.message);
      }
   }

   return (
      <main className="h-screen w-full bg-blue-900">
         <div className="space-x-4">
            <input
               type="text"
               name=""
               id=""
               value={MovieName}
               onChange={(e) => setMovieName(e.target.value)}
            />
            <input
               type="text"
               name=""
               id=""
               value={MovieType}
               onChange={(e) => setMovieType(e.target.value)}
            />
            <button className="bg-red-500 p-2" onClick={dataSubmit}>
               Submit
            </button>
         </div>
         <div className="bg-white text-black ">
            {
                
            }
         </div>
      </main>
   );
}

export default Home;
Home;
