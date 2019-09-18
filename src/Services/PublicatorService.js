import HttpService from './HttpService.js';

class PublicatorService {
  GetNews(credentials) {
    return HttpService.MakePost('/api/Publicator/GetNews', credentials);
  }
}

export default new PublicatorService();
