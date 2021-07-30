import {POST_ITEM,GET_ITEM, DELETE_ITEM, PUT_ITEM} from "../Action/types"
const initialState={
  datas : [],
  loading:true
} 

 export const itemReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_ITEM:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };

    case POST_ITEM:
     return {
      ...state,
      datas: [...state.datas, payload]

     
    }
    case DELETE_ITEM:
     return {
       ...state,
       datas: state.datas.filter(
         data => data._id !== payload
       ),
       loading: false
     };
     case PUT_ITEM:
       return {
         ...state,
         datas: state.datas.map(data =>
           data._id === payload._id ? payload : data
         )
       };
 }
  return state
};