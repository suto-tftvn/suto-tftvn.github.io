import {origins} from './constant/origins';
import {classesUnit} from './constant/classes';
import {data_item} from './constant/items';

export const getOrigin = (id_origin) => {
    // let res = '';
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

export const getClass = (id_class) => {
    const found = classesUnit.find(element => element.id === id_class);
    return found;
}

export const getClassName = (id_class) => {
    let res = '';
    const found = classesUnit.find(element => element.id === id_class);
    if(found && found.name){
        res = found.name; 
    }
    return res;
}

export const getClassIcon = (id_class) => {
    let res = '';
    const found = classesUnit.find(element => element.id === id_class);
    if(found && found.icon){
        res = found.icon; 
    }
    return res;
}

export const getItem = (id_item) => {
    const found = data_item.find(element => element.id === id_item);
    return found;
}