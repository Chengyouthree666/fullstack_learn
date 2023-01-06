import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1670812747469_9047',
  koa: {
    port: 7001,
  },
  bull: {
    // 所有队列复用此配置
    defaultQueueOptions: {
      // redis: {
      //   port: 6379,
      //   host: '127.0.0.1',
      //   password: 'foobared',
      // },
    },
  },
  jwt: {
    // 默认未加密
    secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')
    expiresIn: '2d', // https://github.com/vercel/ms
  },
} as MidwayConfig;
