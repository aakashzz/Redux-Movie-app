import React from "react";

function Loader() {
   return (
      <div className="h-screen flex justify-center items-center" >
         <div className="flex flex-row gap-2 ">
            <div className="w-4 h-4 rounded-full bg-orange-500 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
         </div>
      </div>
   );
}

export default Loader;
