import React from "react";

function MovieCard({Poster,Title,Year,Type,ImdbId}) {
   return (
      <>
      {
         Poster ? (<div className="flex flex-wrap w-fit p-2 border border-gray-600 rounded-xl">
            <div className="w-[200px] h-[] sm:w-[200px] sm:h-[150px] md:w-[300px] md:h-[200px]">
               <img
                  src={Poster}
                  className="h-full w-full rounded-md object-cover "
               />
            </div>
            <div className="sm:w-52 md:w-72 p-2">
               <h2 className="text-white font-Inter text-2xl font-semibold pl-2">
                  {Title}
               </h2>
               <p className="text-white font-Inter text-base pl-2 py-1">
                  Year:- {Year} 
               </p>
               <p className="text-white font-Inter text-base pl-2 py-1">
                  Type:- {Type} 
               </p>
               <p className="text-white font-Inter text-base pl-2 py-1">
                  ImdbId:- {ImdbId} 
               </p>
               <div className="pl-2">
                  <button className="font-Inter text-red-600 text-sm bg-transparent  py-1 rounded-full">
                     More Details
                  </button>
               </div>
            </div>
         </div>) :(<p className="text-white text-center h-screen pt-5 font-semibold text-2xl ">Please enter movie Name</p>)
      }
         
      </>
   );
}

export default MovieCard;
