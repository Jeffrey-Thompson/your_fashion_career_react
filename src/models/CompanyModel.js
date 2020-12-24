const URL = 'http://localhost:3001/companies';

class CompanyModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (companyId) => {
        return fetch(`${URL}/${companyId}`).then(response => response.json());
    }
}

export default CompanyModel;