const URL = 'https://fashion-job-rater-api.herokuapp.com/companies';

class CompanyModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (companyId) => {
        return fetch(`${URL}/${companyId}`).then(response => response.json());
    }
}

export default CompanyModel;