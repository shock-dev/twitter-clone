import axios from '../../core/axios';
import { LoginFormProps } from '../../pages/SignIn/components/LoginModal';

interface ResponseApi {
  status: string
  data: any
}

class AuthApi {
  async login(formData: LoginFormProps): Promise<ResponseApi> {
    const payload = {
      username: formData.email,
      password: formData.password
    };
    const { data }: ResponseApi['data'] = await axios.post<ResponseApi>('/auth/login', payload);
    return data.data;
  }

  async getMe() {
    try {
      const { data }: ResponseApi['data'] = await axios.get<ResponseApi>('/users/me');
      return data.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthApi();
