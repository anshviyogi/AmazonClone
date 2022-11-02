export const initialState = {
    basket:[
        {
        id:"12",
        title:"The Lean Startup How Constant Innovation Creates Radically Successful Businesses",
        price :521,
        ratings:5,
        image:'https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg'
        }
    ],
    user:null
}

export const getBasketTotal = (basket)=> basket?.reduce((amount,item)=> item.price + amount , 0)

const reducer = (state,action) =>{
    // console.log(action)

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET' :
            // Logic of adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
                // Action.item will give us the value of the current product
            }
        
        case 'REMOVE_FROM_BASKET' :
            // Removing Data from the basket

            // we cloned the basket
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)

            if(index>=0){
                // Items exist in basket
                newBasket.splice(index,1)
            }else{
                console.warn("Cant remove the product of id" + action.id)
            }
            return {...state,basket:newBasket}

        default:
            return state;
    }
}

export default reducer