import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header";
import AddForm from ".";
import { addTech } from "../../redux/reducers/technicsReducer";
import { useNavigate } from "react-router";
import { RootState } from "../../redux/index";

const AddFormContainer = () => {
  const techs = useSelector((s: RootState) => s.technics.technics);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const onCategoryChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const onCompanyChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  let onAddButtonClick = () => {
    if (!category) {
      alert("Вы не выбрали категорию товара.");
      throw Error("Вы не выбрали категорию товара.");
    }
    if (!company) {
      alert("Вы не выбрали компанию.");
      throw Error("Вы не выбрали компанию.");
    }

    if (!model) {
      alert("Введите наименование товара");
      throw Error("Введите наименование товара");
    }

    techs.map((it) => {
      if (it.model === model) {
        alert(new Error("Такая модель уже есть, проверьте введенные данные"));
        throw Error("Такая модель уже есть, проверьте введенные данные");
      }
      return true;
    });

    if (Number(price) < 0) {
      alert("Цена не может быть меньше 0.");
      throw Error("Цена не может быть меньше 0.");
    }

    if (description.length > 100) {
      alert("Описание не должно превышать 100 символов");
      throw Error("Описание не должно превышать 100 символов");
    }

    let currentDate = new Date();

    var currentMonth = currentDate.getUTCMonth() + 1; //months from 1-12
    var currentDay = currentDate.getUTCDate();
    var currentYear = currentDate.getUTCFullYear();

    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2];

    if (
      Number(currentYear) < Number(year) ||
      Number(currentMonth) < Number(month) ||
      Number(currentDay) < Number(day)
    ) {
      alert("Дата добавления не может быть позже чем сегодняшнее число.");
      throw Error("Дата добавления не может быть позже чем сегодняшнее число.");
    }

    let addingObj = {
      id: Date.now().toString(),
      category: category,
      company: company,
      model: model,
      price: price,
      date: date,
      description: description,
    };
    dispatch(addTech(addingObj));
    navigate(`/techs/${addingObj.id}`);
  };

  return (
    <div>
      <Header />
      <AddForm
        onAddButtonClick={onAddButtonClick}
        onCategoryChanged={onCategoryChanged}
        onCompanyChanged={onCompanyChanged}
        onDateChanged={onDateChanged}
        onDescriptionChanged={onDescriptionChanged}
        onModelChanged={onModelChanged}
        onPriceChanged={onPriceChanged}
      />
    </div>
  );
};

export default AddFormContainer;
