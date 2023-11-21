import axios from 'axios';
const EMPLOYEE_API_BASE_URL = 'https://v2.nba.api-sports.io/players';
class JoueurService {
    getJoueurs(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}
export default new JoueurService();