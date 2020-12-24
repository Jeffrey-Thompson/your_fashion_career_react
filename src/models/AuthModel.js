const URL = 'http://localhost:3001/auth'

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
}

export default AuthModel