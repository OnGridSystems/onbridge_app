import axios from 'axios'

const host = process.env.REACT_APP_API_HOST

export function getTransactionStatus() {
//   return axios
//     .get(`${host}/tokens/`)
//     .then(response => {
//       return response.data.results
//     })
//     .catch(error => {
//       console.log(error)
//     })

    axios
        .get(`${host}/tokens/`)
        .then(response => {
        return response.data.results
        })
        .catch(error => {
        console.log(error)
    })
}