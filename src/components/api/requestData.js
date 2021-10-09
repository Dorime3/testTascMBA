
export const getResponse = () => {
    return fetch('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses')
        .then((response) => {
            return response.json()
        })
        .then(response => {
            const sliceData = response.data.slice(0, 5) //получаем первые 5 программ
            return sliceData
        })
}