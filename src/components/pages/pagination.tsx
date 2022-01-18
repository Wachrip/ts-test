import React from "react";

interface Pages {
  techsPerPage: number;
  totalTechs: number;
  paginate: (it: number) => void;
}

export const Pagination: React.FC<Pages> = ({
  techsPerPage,
  totalTechs,
  paginate,
}): JSX.Element => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTechs / techsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(techsPerPage);
  return (
    <div>
      <div className="w-full bg-white dark:bg-gray-800">
        <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
          <div className="-mx-2">
            {pageNumbers.map((it) => (
              <a
                key={it}
                onClick={() => paginate(it)}
                href="#"
                className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-200 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700"
              >
                {it}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
