import React from "react";

interface IAddForm {
  onCategoryChanged: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onCompanyChanged: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onModelChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPriceChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAddButtonClick: () => void;
}

const AddForm: React.FC<IAddForm> = ({
  onCategoryChanged,
  onCompanyChanged,
  onModelChanged,
  onPriceChanged,
  onDateChanged,
  onDescriptionChanged,
  onAddButtonClick,
}) => {
  return (
    <div className="flex justify-center">
      <div className="mt-5">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div>
            <div className="inline-block relative w-96 mb-5">
              <label htmlFor="category">Выберите категорию: </label>
              <select
                name="category"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  onCategoryChanged(e)
                }
                required
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Выберите категорию</option>
                <option value="TV">Телевизор</option>
                <option value="Refrigerator">Холодильник</option>
                <option value="Cutter">Мясорубка</option>
              </select>
            </div>

            <div className="inline-block relative w-96 mb-5">
              <label htmlFor="company">Выберите компанию: </label>
              <select
                name="company"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  onCompanyChanged(e)
                }
                required
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Выберите компанию:</option>
                <option value="Samsung">Samsung</option>
                <option value="LG">LG</option>
                <option value="Indesit">Indesit</option>
              </select>
            </div>
            <div className="form-group mb-6 w-96">
              <label htmlFor="model">Введите модель: </label>
              <input
                type="text"
                name="model"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onModelChanged(e)
                }
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

            <div className="form-group mb-6 w-96">
              <label htmlFor="price">Введите цену: </label>
              <input
                type="number"
                name="price"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onPriceChanged(e)
                }
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

            <div className="form-group mb-6 w-96">
              <label htmlFor="date">Выберите дату: </label>
              <input
                type="date"
                name="date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onDateChanged(e)
                }
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
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  onDescriptionChanged(e)
                }
              ></textarea>
            </div>
            <button
              onClick={onAddButtonClick}
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
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
