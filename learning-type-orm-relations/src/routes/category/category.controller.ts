import {Body, Controller, Post} from "@nestjs/common";
import {CategoryService} from "./category.service";
import {Category} from "../../entity/Category.entity";
import {CreateCategoryRequestDto} from "./dto/createCategory.request.dto";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    makeCategory(@Body()makeCategoryRequestDto:CreateCategoryRequestDto): Promise<Category> {
        return this.categoryService.makeCategory(makeCategoryRequestDto)
    }
}