import React from "react";

interface ChosenTech {
  category: string;
  onCategoryChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  company: string;
  onCompanyChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  model: string;
  onModelChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  price: number;
  onPriceChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: string;
  onDateChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onDescriptionChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
}

const ChosenTechEditing: React.FC<ChosenTech> = ({
  category,
  onCategoryChanged,
  company,
  onCompanyChanged,
  model,
  onModelChanged,
  price,
  onPriceChanged,
  date,
  onDateChanged,
  description,
  onDescriptionChanged,
  onEditButtonClick,
  onDeleteButtonClick,
}): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="mt-5">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div>
            <div className="form-group mb-6">
              <input
                type="text"
                name="category"
                value={category}
                onChange={onCategoryChanged}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                name="company"
                value={company}
                onChange={onCompanyChanged}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                name="model"
                value={model}
                onChange={onModelChanged}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="number"
                name="price"
                value={price}
                onChange={onPriceChanged}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="date"
                name="date"
                value={date}
                onChange={onDateChanged}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6">
              <textarea
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                placeholder="Описание"
                name="description"
                value={description}
                onChange={onDescriptionChanged}
              ></textarea>
            </div>
            <button
              onClick={onEditButtonClick}
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Редактировать
            </button>

            <button
              onClick={onDeleteButtonClick}
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenTechEditing;
