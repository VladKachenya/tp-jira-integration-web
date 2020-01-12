import ICredentials from '../ViewModels/ICredentials';
import axios from 'axios';

const getProjectsData = (crelentils: ICredentials): Promise<any> => {
    return axios.post('http://localhost:3000/api/v1/projects', crelentils);
};

export default { getProjectsData };