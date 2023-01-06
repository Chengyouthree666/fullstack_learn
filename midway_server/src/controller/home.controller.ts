import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return '<h2 style="color: orange;text-align:center">hello midway !</h2>';
  }
}
