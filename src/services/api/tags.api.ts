import axios from 'axios';
import { TagsStateInterface } from '../../store/ducks/tags/contracts/state';

class TagsApi {
  async fetchTags(): Promise<TagsStateInterface> {
    const { data } = await axios.get('/tags');
    return data;
  }
}

export default new TagsApi();
