import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteTech } from "../../redux/reducers/technicsReducer";

import Header from "../header";
import { RootState } from "../../redux/index";

const ChosenTech = (): JSX.Element => {
  const { techId } = useParams();
  const technics = useSelector((s: RootState) => s.technics.technics);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteButtonClick = () => {
    dispatch(deleteTech(Number(techId)));
    navigate("/");
  };

  const currentTech = technics.find((t) => t.id === techId);

  return (
    <div>
      <Header />
      <div className="flex justify-center mt-5">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
            <div className="form-group mb-6">
              <p
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
              >
                {currentTech.category}
              </p>
            </div>
            <div className="form-group mb-6">
              <p
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
              >
                {currentTech.company}
              </p>
            </div>

            <div className="form-group mb-6">
              <p
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
              >
                {currentTech.model}
              </p>
            </div>

            <div className="form-group mb-6">
              <p
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
              >
                {currentTech.price}
              </p>
            </div>

            <div className="form-group mb-6">
              <p
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
              >
                {currentTech.date}
              </p>
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
                readOnly
                defaultValue={currentTech.description}
              ></textarea>
            </div>
            <button
              onClick={() => navigate(`/edit/${techId}`)}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChosenTech;
