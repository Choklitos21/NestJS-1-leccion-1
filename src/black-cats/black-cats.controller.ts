import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('black-cats')
export class BlackCatsController {

  @Get()
  getPoint(){
    return { nombre: 'get'}
  }

  @Post()
  postPoint(){
    return { nombre: 'post'}
  }

  @Put()
  putPoint(){
    return { nombre: 'put'}
  }

  @Delete()
  deletePoint(){
    return { nombre: 'delete'}
  }

}
