import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, LessThan, MoreThan, In, Not } from 'typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(dto);
    return await this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]>{
    return await this.productRepository.find();
  }

  
  async findAllPaginated(page: number, limit: number): Promise<Product[]>{
    const skip = (page - 1) * limit;

    return this.productRepository.find({
      skip: skip,
      take: limit,
      order: { id: 'DESC' }, // 최신순
    });
  }

  async findById(id: number): Promise<Product>{
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException(`해당 상품을 찾을 수 없습니다. (id: ${id})`);
    }

    return product;
  }
 
  async update(id: number, dto: UpdateProductDto): Promise<Product>{
    
    //1. 실제 수정 전 데이터를 가져와서 처리할 수 있음(예: 기존 값과 비교, 로그 기록)
    //2. 검증, 트랜잭션, 로그 기능 추가시 조회 후 수정 방식이 확장성 있음음
    //3. 수정 전에 기존 데이터 체크/로직 필요한 경우	
    const product = await this.productRepository.findOneBy({ id });

    if(!product){
        throw new NotFoundException('상품이 존재하지 않습니다. (id: ${id})');
    }

    // product 객체에 dto 값을 덮어쓰기
    Object.assign(product, dto);

    return await this.productRepository.save(product);
  }

  async delete(id: number): Promise<void>{
    const result = await this.productRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`삭제할 상품이 존재하지 않습니다. (id: ${id})`);
    }
  }

  async createBulk(dtos: CreateProductDto[]): Promise<Product[]>{
    const newProducts = this.productRepository.create(dtos);

    return await this.productRepository.save(newProducts);
    
  }

  async search(query: {name?: string; category?: string}): Promise<Product[]>{
    
    const where: any = {};

    console.log('🔍 query.name:', query.name); // 🔥 꼭 확인
    console.log('🔍 query.category:', query.category);
    if(query.name){
      where.name = Like(`%${query.name}%`);
    }

    if(query.category){
      where.category = query.category
    }

    return await this.productRepository.find({where});
  }
}