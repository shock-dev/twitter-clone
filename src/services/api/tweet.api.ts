import axios from 'axios';
import { TweetStateInterface } from '../../store/ducks/tweet/contracts/state';

class TweetApi {
  async fetchTweets(): Promise<TweetStateInterface['items']> {
    const { data } = await axios.get('/tweets');
    return data;
  }
}

export default new TweetApi();
