import {origins} from './constant/origins';

export const getOrigin = (id_origin) => {
    let res = '';
    const found = origins.find(element => element.id == id_origin);
    // if(found && found.name){
    //     res = found.name; 
    // }
    return found;
}

export const getOriginName = (id_origin) => {
    let res = '';
    const found = origins.find(element => element.id == id_origin);
    if(found && found.name){
        res = found.name; 
    }
    return res;
}

export const getOriginIcon = (id_origin) => {
    let res = '';
    const found = origins.find(element => element.id == id_origin);
    if(found && found.icon){
        res = found.icon; 
    }
    return res;
}