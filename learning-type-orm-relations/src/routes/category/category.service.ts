import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Category} from "../../entity/Category.entity";
import {Repository} from "typeorm";
import {CreateCategoryRequestDto} from "./dto/createCategory.request.dto";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository : Repository<Category>,
        ){}

    async makeCategory(createCategoryRequestDto:CreateCategoryRequestDto): Promise<Category>{
        return this.categoryRepository.save(createCategoryRequestDto)
    }
}