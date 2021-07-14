import axios from 'axios';

export function getCategoriesList () {
  return axios.get('https://opentdb.com/api_category.php')
    .then(res => (res.data.trivia_categories))
}