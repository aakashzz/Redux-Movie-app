import React from "react";
import Container from "../../components/container/Container";
function Header() {
   return (
      <header className=" bg-slate-800">
         <Container>
            <nav className="flex justify-between items-center h-20 ">
                <div className="font-Inter ">
                    <h2 className="text-white text-3xl font-bold">🍿Movie-Find</h2>
                </div>
                <ul className="">
                    <li className="text-white font-Inter text-xl font-semibold">History</li>
                </ul>
            </nav>
         </Container>
      </header>
   );
}

export default Header;
