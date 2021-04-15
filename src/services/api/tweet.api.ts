import axios from 'axios';
import { TweetsStateInterface } from '../../store/ducks/tweets/contracts/state';

class TweetsApi {
  async fetchTweets(): Promise<TweetsStateInterface['items']> {
    const { data } = await axios.get('/tweets');
    return data;
  }
}

export default new TweetsApi();
