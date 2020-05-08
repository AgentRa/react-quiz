import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-fc7b3.firebaseio.com/'
})