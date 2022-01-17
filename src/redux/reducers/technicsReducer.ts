import { AnyAction } from "redux";
import { TechState } from "../../components/models/technics";

const initialState: TechState = {
  technics: [
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "TV",
      company: "Samsung",
      model: "G2105",
      price: 1999.99,
      date: "2022-01-11",
      description: "Good stuff",
    },
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "Refrigerator",
      company: "LG",
      model: "Superduper",
      price: 999.99,
      date: "2022-01-10",
      description: "Good stuff",
    },
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "Cutter",
      company: "Samsung",
      model: "Insaneone",
      price: 99.99,
      date: "2022-01-12",
      description: "Good stuff",
    },
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "Cutter",
      company: "Samsung",
      model: "Insaneone2",
      price: 99.99,
      date: "2022-01-12",
      description: "Good stuff",
    },
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "Cutter",
      company: "Samsung",
      model: "Insaneone3",
      price: 99.99,
      date: "2022-01-12",
      description: "Good stuff",
    },
  ],
};

const ADD_TECH = "ADD_TECH";
const EDIT_TECH = "EDIT_TECH";
const DELETE_TECH = "DELETE_TECH";
const SORT_BY_DATE = "SORT_BY_DATE";
const SORT_BY_PRICE_HIGH_TO_LOW = "SORT_BY_PRICE_HIGH_TO_LOW";
const SORT_BY_PRICE_LOW_TO_HIGH = "SORT_BY_PRICE_LOW_TO_HIGH";

let technicsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TECH: {
      return {
        ...state,
        technics: [...state.technics, action.tech],
      };
    }
    case EDIT_TECH: {
      return {
        ...state,
        technics: state.technics.map((it) => {
          if (it.id === action.payload.id) {
            return {
              ...it,
              ...action.payload,
            };
          }
          return it;
        }),
      };
    }
    case DELETE_TECH: {
      console.log(action.id);
      return {
        ...state,
        technics: state.technics.filter((it) => it.id !== action.id),
      };
    }
    case SORT_BY_DATE: {
      // return {
      //   ...state,
      //   technics: Array.from(
      //     state.technics.sort((a, b) => {
      //       return Number(new Date(b.date)) - Number(new Date(a.date));
      //     })
      //   ),
      // };

      return {
        ...state,
        technics: [...state.technics].sort((a, b) => {
          return Number(new Date(b.date)) - Number(new Date(a.date));
        }),
      };
    }
    case SORT_BY_PRICE_HIGH_TO_LOW: {
      // return {
      //   ...state,
      //   technics: Array.from(
      //     state.technics.sort((a, b) => {
      //       return Number(b.price) - Number(a.price);
      //     })
      //   ),
      // };
      let newArr = [...state.technics].sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
      console.log(`newArr ${newArr.map((it) => it.price)}`);
      return {
        ...state,
        technics: [...state.technics].sort((a, b) => {
          return Number(b.price) - Number(a.price);
        }),
      };
    }
    case SORT_BY_PRICE_LOW_TO_HIGH: {
      let newArr = [...state.technics]
        .sort((a, b) => {
          return Number(b.price) - Number(a.price);
        })
        .reverse();

      console.log(`newArr ${newArr.map((it) => it.price)}`);

      return {
        ...state,
        technics: [...state.technics]
          .sort((a, b) => {
            return Number(b.price) - Number(a.price);
          })
          .reverse(),
      };
    }

    default:
      return {
        ...state,
        technics: [
          ...state.technics.sort((a, b) => {
            return Number(new Date(b.date)) - Number(new Date(a.date));
          }),
        ],
      };
  }
};

export function addTech(tech: object) {
  return { type: ADD_TECH, tech };
}

export function editTech(payload: object) {
  return { type: EDIT_TECH, payload };
}

export function deleteTech(id: number) {
  return { type: DELETE_TECH, id };
}

export function sortByDate() {
  return { type: SORT_BY_DATE };
}

export function sortByPriceHighToLow() {
  return { type: SORT_BY_PRICE_HIGH_TO_LOW };
}

export function sortByPriceLowToHigh() {
  return { type: SORT_BY_PRICE_LOW_TO_HIGH };
}

export default technicsReducer;
