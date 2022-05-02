import { ICartProduct } from "../../interfaces";
import { CartState } from "./";

type CartType =
    | {
          type: "[Cart] - LoadCart from Cookies | storage";
          payload: ICartProduct[];
      }
    | { type: "[Cart] - Add product"; payload: ICartProduct };

export const cartReducer = (state: CartState, action: CartType): CartState => {
    switch (action.type) {
        case "[Cart] - LoadCart from Cookies | storage":
            return {
                ...state,
            };
        default:
            return state;
    }
};
