export const getCoords = (): Promise<GeolocationCoordinates> => {
    return new Promise((res, rej) => {
        const success = (position: GeolocationPosition) => {
            res(position.coords)
        }
        const reject = () => {
            rej('Error')
        }

        navigator.geolocation.watchPosition(success, reject)
    })
}