import axios from 'axios';
const EMPLOYEE_API_BASE_URL = '';
class JoueurService {
    getJoueurs(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}
export default new JoueurService();