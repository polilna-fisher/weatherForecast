import {cities} from "./cities";

const addZeroToShortNumber = (num:number):string | number => {
    if(num < 10){
        return `0${num}`
    }else{
        return num
    }
}

export const getTime = ():string => {
    const hours = addZeroToShortNumber(Number(new Date().getHours()))
    const minutes = addZeroToShortNumber(Number(new Date().getMinutes()))
    return `${hours}:${minutes}`
}

export const getDate = ():string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weekDay = days[new Date().getDay()]
    const day = new Date().getDate()
    const monthName = new Date().toLocaleString('en-EN', { month: 'short' });
    return `${weekDay}, ${day} ${monthName}`
}

export const translateCIty = (city: string): string => {
    const translatedName = cities.find(item => {
        return  item.cityName === city
    })
    if(!!translatedName){
        return translatedName.label
    }else{
        return city
    }
}
