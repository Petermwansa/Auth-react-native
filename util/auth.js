import axios from "axios";

const API_KEY = 'AIzaSyBd-A6wfCrvgSmb7UW7rwRfiASolLnYtOg';

const createUser = async (email, password) => {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}

