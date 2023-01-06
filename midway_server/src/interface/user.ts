/**
 * 用户注册
 */
interface UserRegister {
  userName: string;
  password: string;
  nickName: string;
  verificationCode: string;
}

/**
 * 用户登录
 */
type UserLogin = UserRegister;

/**
 * 用户登陆成功
 */
interface LoginResponse {
  userId: string;
  userName: string;
  token: string;
}

/**
 * 用户登出
 */
interface UserLogout {
  token: string;
}

export { UserRegister, UserLogin, UserLogout, LoginResponse };
