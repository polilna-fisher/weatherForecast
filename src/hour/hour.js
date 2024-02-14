import './hour.sass'
import NavIcon from './img/navigation.png'

const Hour = ({ time, icon, temperature, uv, humidity, feelsLike  }) => {
    const shortenTime = (String(time)).split(' ')[1]
    let backgroundColour
    const morningBackground = 'rgba(255,230,203,0.65)'
    const dayBackground = 'rgba(248,133,8,0.66)'
    const nightBackground = 'rgba(68,61,100,0.65)'

    if(Number(shortenTime.slice(0,2)) < 10){
        backgroundColour = morningBackground
    }else if(Number(shortenTime.slice(0,2)) >= 10 && Number(shortenTime.slice(0,2)) < 19){
        backgroundColour = dayBackground
    }else if(Number(shortenTime.slice(0,2)) >= 19){
        backgroundColour = nightBackground
    }

    return(
        <div className='hour_item' style={{backgroundColor: backgroundColour}} >
            <div>{shortenTime}</div>
            <img className="hour_weather_icon" alt="weather_icon" src={icon}/>
            <div>{temperature}°C</div>
            <img className="hour_weather_icon" alt="img" src={NavIcon}/>
            <div className='hour_item_header'>Feels like</div>
            <div>{feelsLike}°C</div>
            <div className='hour_item_header'>UV</div>
            <div>{uv}</div>
        </div>
    )
}

export default Hour