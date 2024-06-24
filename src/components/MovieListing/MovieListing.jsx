import React,{ useId} from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";

import Loader from "../Loader";

function MovieListing() {
     const selector =  useSelector((state) => state.response.data);
      const id = useId()
   return (
      <>
      {
        selector ?
        ( <div className="flex flex-wrap justify-evenly gap-y-3 p-2 h-full">
            {
            selector ? (
               selector?.map((response)=>{
                return  <MovieCard key={response?.imdbID && id} Year={response?.Year} Poster={response?.Poster} Type={response?.Type} ImdbId={response?.imdbID} Title={ response?.Title }/>
               })
            ) : (<Loader />)}
         </div>):( <p className="text-white text-center h-screen pt-5 font-semibold text-2xl ">Sorry Movie Not Found</p>)
      }
      </>
   );
}

export default MovieListing;
