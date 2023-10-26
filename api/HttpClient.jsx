class HttpClient {

    static url = "http://20.88.41.42/api/categoria/v1"; // Propriedade estática


    static async get(params = {}) {
      const queryParams = new URLSearchParams(params);
      const response = await fetch(`${url}?${queryParams}`);
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      return response.json();
    }
  
    static async post(url, data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      return response.json();
    }
  
    static async put(url, data = {}) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      return response.json();
    }
  
    static async delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      return response.json();
    }
  }
  
  export default HttpClient;
  