import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ICredentials from '../ViewModels/ICredentials';

import api from '../api';

export default (credentials: ICredentials) => {
    api.getProjectsData(credentials)
        .then(response => {
            AppDispatcher.dispatch({
                type: AppConstants.PROJECTS_LOAD_SUCCESS,
                items: response.data
            });
        })
        .catch(err => {
            console.log(err);
            AppDispatcher.dispatch({
                type: AppConstants.PROJECTS_LOAD_SUCCESS,
                items: err
            });
        });
};
