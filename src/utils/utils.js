import {cities} from "./cities";

const addZeroToShortNumber = (num) => {
    if(Number(num) < 10){
        return `0${num}`
    }else{
        return num
    }
}

export const getTime = () => {
    const hours = addZeroToShortNumber(new Date().getHours())
    const minutes = addZeroToShortNumber(new Date().getMinutes())
    return `${hours}:${minutes}`
}

export const getDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weekDay = days[new Date().getDay()]
    const day = new Date().getDate()
    const monthName = new Date().toLocaleString('en-EN', { month: 'short' });
    return `${weekDay}, ${day} ${monthName}`
}

export const translateCIty = (city) => {
    const translatedName = cities.find(item => {
        console.log(123)
        return  item.cityName === city
    })
    if(!!translatedName){
        return translatedName.label
    }else{
        return city
    }
}
