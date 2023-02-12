import { ACTION_CLICKED_FAVORITE } from "../action/favorite";

const initialState = {
  favoriteList: [],
};

export const favoriteListReducer = (state = initialState, action) => {
  console.log(action.type === ACTION_CLICKED_FAVORITE);
  if (action.type === ACTION_CLICKED_FAVORITE) {
    const hasItem =
      state.favoriteList.filter((item) => item === action.clicked).length > 0; // 클릭한 값이 이미 있는지를 검사

    if (hasItem) {
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (item) => item !== action.clicked
        ),
      };
    }
    return {
      ...state,
      favoriteList: state.favoriteList.concat([action.clicked]),
    };
  }
  return { ...state };
};
