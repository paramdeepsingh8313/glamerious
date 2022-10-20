export const initialState = {
  banners: [],
  all_categories: [],
  stock_clearance: [],
  all_product: [],
  card_item: [],
};

export const actionTypes = {
  BANNERs: "BANNERs",
  ALL_CATEGORIES: "ALL_CATEGORIES",
  STOCK_CLEARANCE: "STOCK_CLEARANCE",
  ALL_PRODUCT: "ALL_PRODUCT",
  CARD_ITEM: "CARD_ITEM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "BANNERs":
      return { ...state, banners: action.item.banners };

    case "ALL_CATEGORIES":
      return { ...state, all_categories: action.item.all_categories };

    case "STOCK_CLEARANCE":
      return { ...state, stock_clearance: action.item.stock_clearance };

    case "ALL_PRODUCT":
      return { ...state, all_product: action.item.all_product };

    case "CARD_ITEM":
      return { ...state, card_item: action.item.card_item };

    default:
      return state;
  }
};

export default reducer;
