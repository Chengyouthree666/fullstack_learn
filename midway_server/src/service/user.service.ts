import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: '程明辉',
      phone: '18730229867',
      email: '_',
    };
  }
}
