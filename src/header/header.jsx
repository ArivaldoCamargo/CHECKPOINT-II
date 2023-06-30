import React from "react";

function Header() {
  return (
    <header className="bg-gray-500 p-4">
      <nav className="container mx-auto">
        <ul className="flex items-center justify-center p-10">
          <li>
            <a href="/" className="text-blue-500 hover:text-blue-700 px-7 font-bold font-custom ">
              Home
            </a>
          </li>
          <li>
            <a href="/favoritos" className="text-blue-500 hover:text-blue-700 font-bold font-custom">
              Favoritos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;