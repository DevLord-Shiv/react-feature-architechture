import {doPostRequest} from '../base';

export function userLogin(data){
   return doPostRequest('/login' , data);
}

