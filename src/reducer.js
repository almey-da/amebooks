export const initialState = {
    basket: [],
    user: null,
};

//selector > call it and it will give u info about the basket
//reduce function is used to iterate over each item in the basket array and accumulate a total value
//two parameters: amount (the accumulator, initial value 0) and item (the current item in the array). For each item, it adds the item.price to the current total (amount)
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "ADD_TO_BASKET":
            //logic for adding item to the basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            // logic for removing item from basket

            // we cloned the basket
            let newBasket = [...state.basket];

            //check to see if the product exists
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) from basket`
                );
            }
            return{
                ...state, 
                basket: newBasket,
            };
        default:
            return state;
    }
};

export default reducer;