import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

import ChosenTech from "./components/chosenTech";
import Main from "./components/main/Main";
import TechContainer from "./components/techsType/techsContainer";
import AddFormContainer from "./components/addForm/addFormContainer";
import ChosenTechEditingContainer from "./components/chosenTechEditing/chosenTechEditingContainer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tech/:category" element={<TechContainer />} />
          <Route path="add" element={<AddFormContainer />} />
          <Route path="/techs/:techId" element={<ChosenTech />} />
          <Route
            path="/edit/:techId"
            element={<ChosenTechEditingContainer />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
