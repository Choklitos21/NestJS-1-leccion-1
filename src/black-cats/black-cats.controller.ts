import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";

@Controller('black-cats')
export class BlackCatsController {

  @Get('')
  getPoint(@Query() name){
    return { endPoint: "get", ...name };
  }

  @Post()
  postPoint(@Body() body: {}){
    return { endpoint: 'post', bodyInfo: {...body} }
  }

  @Put(':param')
  putPoint(@Param('param') param, @Body() body: {}){
    return { endpoint: 'put', param, bodyInfo: {...body} }
  }

  @Delete(':param')
  deletePoint(@Param('param') param){
    return { endPoint: "delete", param };
  }

}
