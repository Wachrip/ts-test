import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import TechType from ".";
import {
  sortByDate,
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
} from "../../redux/reducers/technicsReducer";
import { FilterBy } from "../filterBy";
import Header from "../header";
import { Pagination } from "../pages/pagination";
import { FilterPrice } from "../priceFilter";
import { SortBy } from "../sortBy";
import { RootState } from "../../redux/index";

const TechContainer = () => {
  const technics = useSelector((s: RootState) => s.technics.technics);

  const dispatch = useDispatch();
  const { category } = useParams();
  const [arrayToShow, setArrayToShow] = useState(technics);

  let arrayToRender = technics;
  const [currentPage, setCurrentPage] = useState(1);
  const [techPerPage] = useState(2);

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const indexOfLastTech = currentPage * techPerPage;
  const indexOfFirstTech = indexOfLastTech - techPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // console.log(technics);

  // if (technics !== arrayToShow && technics.length === arrayToShow.length) {
  //   setArrayToShow(technics);
  // }

  const onSortSelectHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    if (e.target.value === "Date") {
      dispatch(sortByDate());
    }
    if (e.target.value === "highToLow") dispatch(sortByPriceHighToLow());

    if (e.target.value === "lowToHigh") dispatch(sortByPriceLowToHigh());

    setArrayToShow(technics);
  };

  const onFilterSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArrayToShow(technics);
    arrayToRender = technics;

    console.log(e.target.value);
    if (e.target.value === "none") {
      // setArrayToShow(technics);
      // arrayToRender = technics;
    } else {
      arrayToRender = technics.filter((it) => it.company === e.target.value);
      setArrayToShow(arrayToRender);
    }
    console.log(arrayToRender);
  };

  const onFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromPrice(Number(e.target.value));
  };

  const onToValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToPrice(Number(e.target.value));
  };

  const onSearchButtonClick = () => {
    if (toPrice >= fromPrice) {
      console.log(toPrice, fromPrice);
      arrayToRender = technics.filter(
        (it) => it.price >= fromPrice && it.price <= toPrice
      );
    }
    setArrayToShow(arrayToRender);
  };

  if (category === "tvs") {
    arrayToRender = technics.filter((it) => it.category === "TV");
  }

  if (category === "refs") {
    arrayToRender = technics.filter((it) => it.category === "Refrigerator");
  }

  if (category === "cutters") {
    arrayToRender = technics.filter((it) => it.category === "Cutter");
  }

  const currentTechs = arrayToShow.slice(indexOfFirstTech, indexOfLastTech);

  return (
    <div className="block">
      <Header />
      <SortBy onSortSelectHandler={onSortSelectHandler} />
      <FilterBy onFilterSelectHandler={onFilterSelectHandler} />
      <FilterPrice
        onSearchButtonClick={onSearchButtonClick}
        onFromValueChanged={onFromValueChange}
        onToValueChanged={onToValueChange}
      />
      <TechType technics={currentTechs} />
      <Pagination
        techsPerPage={techPerPage}
        paginate={paginate}
        totalTechs={arrayToShow.length}
      />
    </div>
  );
};

export default TechContainer;
