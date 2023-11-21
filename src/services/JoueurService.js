import axios from 'axios';
const EMPLOYEE_API_BASE_URL = 'https://api.publicapis.org/entries';
class JoueurService {
    getJoueurs(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}
export default new JoueurService();