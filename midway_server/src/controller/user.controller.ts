import {
  Body,
  Controller,
  // Get,
  Inject,
  Post,
  // Put,
} from '@midwayjs/decorator';
// import { Context } from '@midwayjs/koa';
import { Validate } from '@midwayjs/validate';
// import // UserRegister,
//   // UserLogin,
//   //  UserLogout,
//   //   LoginResponse,
//   '../interface/user';
import { UserDTO } from '../dto/user';

@Controller('/api')
export class User {
  @Inject()
  // ctx: Context,
  @Post('/register')
  @Validate()
  async register(@Body() userRegister: UserDTO): Promise<any> {
    const { userName, password, verificationCode } = userRegister;
    console.log(userName, password, verificationCode);
    // TODO: 处理注册接口
  }
}
