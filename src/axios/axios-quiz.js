import axios from 'axios'


export default axios.create({
    baseURL:'https://quiz-567e3-default-rtdb.firebaseio.com/'
})