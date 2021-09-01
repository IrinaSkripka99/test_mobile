import {AxiosResponse} from 'axios';
import axiosService from '../../../../api';

const initialListParams = {
  page: 1,
  per_page: 25,
};

class EventsRepository {
  async load(params = initialListParams): Promise<AxiosResponse> {
    return axiosService.get('events', params);
  }
}
const eventsRepository = new EventsRepository();
export default eventsRepository;
