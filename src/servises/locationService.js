
export const getCoords = () => {
    return new Promise((res, rej) => {
        const success = (position) => {
            res(position.coords)
        }
        const reject = () => {
            rej('Error')
        }

        navigator.geolocation.watchPosition(success, reject)
    })
}