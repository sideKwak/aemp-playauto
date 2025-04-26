import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete, Query, DefaultValuePipe } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('상품') // ← Swagger 문서에서 그룹 이름으로 나옴
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ){
    return this.productService.findAllPaginated(page, limit);
  }

  @Get('search')
  searchProducts(
    @Query('name') name: string, @Query('category') category:string
  ){
    console.log('🔍 name:', name, 'category:', category);
    return this.productService.search({name, category});
  }

  @Get(':id')
  getProduct(
    @Param('id', ParseIntPipe) id: number
  ){
    return this.productService.findById(id);
  }
  
  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto
  ){
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(
    @Param('id', ParseIntPipe) id: number
  ){
    return this.productService.delete(id);
  }

  @Post('bulk')
  @ApiBody({ type: CreateProductDto, isArray: true }) // ✅ 추가
  createProducts(@Body() createProductDtos: CreateProductDto[]) {
    return this.productService.createBulk(createProductDtos);
  }

}
