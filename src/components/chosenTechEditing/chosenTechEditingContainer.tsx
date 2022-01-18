import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteTech, editTech } from "../../redux/reducers/technicsReducer";
import ChosenTechEditing from ".";
import Header from "../header";
import { RootState } from "../../redux/index";

const ChosenTechEditingContainer = () => {
  const dispatch = useDispatch();
  const { techId } = useParams();
  const technics = useSelector((s: RootState) => s.technics.technics);
  const navigate = useNavigate();

  const currentTech = technics.find((t) => t.id === techId);

  const [category, setCategory] = useState(currentTech.category);
  const [company, setCompany] = useState(currentTech.company);
  const [model, setModel] = useState(currentTech.model);
  const [price, setPrice] = useState(currentTech.price);
  const [description, setDescription] = useState(currentTech.description);
  const [date, setDate] = useState(currentTech.date);

  const onCategoryChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onCompanyChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const onModelChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };

  const onPriceChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const onDescriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const onDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  let onEditButtonClick = () => {
    if (!category) {
      throw Error("Вы не выбрали категорию товара.");
    }
    if (!company) {
      throw Error("Вы не выбрали компанию.");
    }

    if (!model) {
      throw Error("Введите наименование товара");
    }

    if (isNaN(price) || price === "") {
      alert("Введите цену корректно");
      throw Error("Введите цену корректно");
    }

    if (price <= 0) {
      throw Error("Цена не может быть меньше или равна 0.");
    }

    if (description.length > 100) {
      throw Error("Описание не должно превышать 100 символов");
    }

    let currentDate = new Date();

    var currentMonth = currentDate.getUTCMonth() + 1;
    var currentDay = currentDate.getUTCDate();
    var currentYear = currentDate.getUTCFullYear();

    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2];

    if (currentYear < year || currentMonth < month || currentDay < day) {
      throw Error("Дата добавления не может быть позже чем сегодняшнее число.");
    }

    let editingData = {
      id: techId,
      category: category,
      company: company,
      model: model,
      price: Number(price),
      date: date,
      description: description,
    };

    console.log(editingData);

    dispatch(editTech(editingData));
    navigate(`/techs/${techId}`);
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteTech(Number(techId)));
  };

  return (
    <div>
      <Header />
      <ChosenTechEditing
        category={category}
        onCategoryChanged={onCategoryChanged}
        company={company}
        date={date}
        description={description}
        model={model}
        onCompanyChanged={onCompanyChanged}
        onDateChanged={onDateChanged}
        onDeleteButtonClick={onDeleteButtonClick}
        onDescriptionChanged={onDescriptionChanged}
        onEditButtonClick={onEditButtonClick}
        onModelChanged={onModelChanged}
        onPriceChanged={onPriceChanged}
        price={price}
      />
    </div>
  );
};

export default ChosenTechEditingContainer;
