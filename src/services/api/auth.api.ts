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
    return data;
  }
}

export default new AuthApi();
