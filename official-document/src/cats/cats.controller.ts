import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {CreateCatDto} from "./dto/create-cat.dto";
import {Cat} from "./interfaces/cst.interface";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll():Promise<Cat[]>{
        console.log("This action returns all cats")
        return this.catsService.findAll()
    }
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id:number){

    }
}
