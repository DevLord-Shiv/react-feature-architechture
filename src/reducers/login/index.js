import * as actionTypes from '../../utils/constants';


export default function  loginReducer(state = {} , action){


   switch(action.type){

     case actionTypes.SUBMIT:
       return {...state};

     case actionTypes.UNAUTHENTICATED:
       return {...state, message : action.data.message}

     case actionTypes.SUBMIT_ERROR:
       return {...state, message : action.data.message}

     default :
       return state;
   }
}