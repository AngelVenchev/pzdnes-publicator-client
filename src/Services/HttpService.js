class HttpService {
  baseUrl = 'https://tgddml3e7h.execute-api.eu-central-1.amazonaws.com/Prod';

  MakePost(url, body) {
    var actualUrl = this.baseUrl + url;
    return fetch(actualUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }
}

export default new HttpService();