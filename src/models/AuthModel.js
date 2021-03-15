const URL = 'https://fashion-job-rater-api.herokuapp.com/auth'

class AuthModel {
    static register = (user) => {
        return fetch(`${URL}/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json());
    }

    static login = (user) => {
        return fetch(`${URL}/login`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json());
    }
}

export default AuthModel