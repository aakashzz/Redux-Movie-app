import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
function App() {
   return (
      <main className="bg-slate-900 h-[100%] w-full">
         <Header />
         <Home />
      </main>
   );
}

export default App;
