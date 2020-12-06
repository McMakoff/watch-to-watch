import filmsData from "./mocks/films";

const initialState = {
  activeGenre: `All genres`,
  cardList: filmsData,
  genreList: () => {
    let allGenreList = [`All genres`];

    filmsData.forEach((item) => {
      allGenreList = allGenreList.concat(item.genre);
    });

    return Array.from(new Set(allGenreList));
  },
};

const actionCreator = {
  changeFilter: (genre) => ({
    type: `CHANGE_FILTER`,
    payload: genre,
  }),

  changeCardList: (genre) => {
    const isAllGenre = genre === `All genres`;
    let filterCardList = [];

    if (!isAllGenre) {
      filterCardList = filmsData.filter((card) => card.genre.includes(genre));
    }

    return {
      type: `CHANGE_CARD_LIST`,
      payload: isAllGenre ? filmsData : filterCardList,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (`CHANGE_FILTER`):
      return (
        Object.assign({}, state, {
          activeGenre: action.payload,
        })
      );

    case (`CHANGE_CARD_LIST`):
      return (
        Object.assign({}, state, {
          cardList: action.payload,
        })
      );
  }

  return state;
};

export {actionCreator, reducer};
