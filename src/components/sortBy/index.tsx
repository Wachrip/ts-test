import React from "react";

interface SortSelect {
  onSortSelectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SortBy: React.FC<SortSelect> = ({
  onSortSelectHandler,
}: SortSelect): JSX.Element => {
  return (
    <div className="flex">
      <div className="mb-3 w-96">
        <label htmlFor="sort">Сортировать по: </label>
        <select
          name="sort"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onSortSelectHandler(e)
          }
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option value="">-------</option>
          <option value="Date">Дате</option>
          <option value="highToLow">Убыванию цены</option>
          <option value="lowToHigh">Возрастанию цены</option>
        </select>
      </div>
    </div>
  );
};
