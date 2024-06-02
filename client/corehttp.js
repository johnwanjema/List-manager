// Constructor to create an XHR object
class coreHTTP {
  async get(url) {
    return await this.request('GET', url);
  }

  async post(url, data) {
    return await this.request('POST', url, data);
  }

  async put(url, data) {
     return await this.request('PUT', url, data);
  }

  async delete(url) {
    return await this.request('DELETE', url);
  }

  async patch(url, data) {
    return await this.request('PATCH', url, data);
 }

  request(method, url, data = null) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }

}