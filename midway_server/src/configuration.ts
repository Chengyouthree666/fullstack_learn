import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
// 分布式任务管理器，强依赖于redis
import * as bull from '@midwayjs/bull';
// JWT
import * as jwt from '@midwayjs/jwt';
// 验证码组件
import * as captcha from '@midwayjs/captcha';

@Configuration({
  imports: [
    koa,
    validate,
    bull,
    jwt,
    captcha,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}

export class MainConfiguration {
  @App('bull')
  bullApp: bull.Application;

  async onReady() {
    // this.bullApp.useMiddleware();
    // this.bullApp.useFilter();
  }
}
