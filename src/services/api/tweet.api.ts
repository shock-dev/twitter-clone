import axios from 'axios';
import { TweetsInterface, TweetsStateInterface } from '../../store/ducks/tweets/contracts/state';

class TweetsApi {
  async fetchTweets(): Promise<TweetsStateInterface['items']> {
    const { data } = await axios.get('/tweets');
    return data;
  }

  async fetchTweetData(id: string): Promise<TweetsInterface> {
    const { data } = await axios.get(`/tweets?_id=${id}`);
    return data;
  }
}

export default new TweetsApi();
