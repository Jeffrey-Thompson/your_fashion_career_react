const URL = 'http://localhost:3001/companies';

class RatingModel {
    static create = (companyId, review) => {
        return fetch(`${URL}/${companyId}/reviews`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(response => response.json());
    }

    static company = (companyId) => {
        return fetch(`${URL}/${companyId}/reviews`).then(response => response.json());
    }
}

export default RatingModel;