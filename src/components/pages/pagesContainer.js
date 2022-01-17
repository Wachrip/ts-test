// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Pages } from "./pages";
// import { Pagination } from "./pagination";

// export const PagesContainer = () => {
//   const techs = useSelector((s) => s.technics.technics);
//   console.log(techs);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [techPerPage] = useState(2);

//   const indexOfLastTech = currentPage * techPerPage;
//   const indexOfFirstTech = indexOfLastTech - techPerPage;
//   const currentTechs = techs.slice(indexOfFirstTech, indexOfLastTech);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <Pages techs={currentTechs} />
//       <Pagination
//         techsPerPage={techPerPage}
//         totalTechs={techs.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// };
