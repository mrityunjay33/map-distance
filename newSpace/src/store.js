import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  points: [],
};

// function to add points to the redux store
export function addPoint(point) {
  return {
    type: "ADD_POINT",
    payload: point,
  };
}
export function removePoint(pointId) {
  return {
    type: "REMOVE_POINT",
    payload: pointId,
  };
}

function pointsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_POINT":
      return {
        ...state,
        points: [...state.points, action.payload],
      };
    case "REMOVE_POINT":
      return {
        ...state,
        points: state.points.filter((point) => point.properties.id !== action.payload),
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    points: pointsReducer,
  },
});

export default store;
