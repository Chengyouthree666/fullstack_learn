import {
  Inject,
  Controller,
  Get,
  // Param,
  Query,
  // Post
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { Random } from '../interface/demo';

@Controller('/api')
export class DemoController {
  @Inject()
  ctx: Context;

  @Get('/random')
  async randomNumber(): Promise<Random> {
    return {
      num: (Math.random() * 100).toFixed(2),
      ctx: {
        request: this.ctx.request,
        response: this.ctx.response,
      },
    };
  }

  @Get('/sex')
  async getSex(@Query('sex') sex: string): Promise<string> {
    const tempMap = {
      male: '男',
      female: '女',
    };
    return tempMap[sex] || '未知性别';
  }

  @Get('/cookie')
  async getCookie(): Promise<any> {
    // set cookie
    this.ctx.cookies.set('foo', 'bar', { encrypt: true });
    // get cookie
    this.ctx.cookies.get('foo', { encrypt: true });
    return this.ctx.cookies;
  }
}
