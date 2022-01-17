import React from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          to="/"
          className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          Главная
        </Link>

        <Link
          to="/tech/tvs"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Телевизоры
        </Link>

        <Link
          to="/tech/refs"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Холодильники
        </Link>

        <Link
          to="/tech/cutters"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Мясорубки
        </Link>

        <Link
          to="/add"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Добавить товар
        </Link>
      </div>
    </nav>
  );
};

export default Header;
