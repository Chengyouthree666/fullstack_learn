import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {
  @Rule(RuleType.string().required())
  userName: string;

  @Rule(RuleType.string().required())
  password: string;

  @Rule(RuleType.string().required)
  verificationCode: string;
}
