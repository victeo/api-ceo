import axios from 'axios';

const apiUrl = 'http://20.88.41.42/api/categoria/v1';

class ApiService {
    static async get() {
        try {
            const response = await axios.get('http://20.88.41.42/api/categoria/v1');
            //const response = await axios.get('https://quote-garden.onrender.com/api/v3/quotes');

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async post(endpoint, data) {
        try {
            const response = await axios.post(`${apiUrl}/${endpoint}`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async put(endpoint, data) {
        try {
            const response = await axios.put(`${apiUrl}/${endpoint}`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async delete(endpoint) {
        try {
            const response = await axios.delete(`${apiUrl}/${endpoint}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    static async teste() {
        fetch('http://20.88.41.42/api/categoria/v1', {
            mode: 'no-cors',
        })
            .then(response => response.json())
            .then(data => {
                console.log(response)
                // Do something with the data
            })
            .catch(error => {
                // Handle the error
            });
    }

}


export default ApiService;
