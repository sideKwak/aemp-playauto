import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete, UseGuards, Query, DefaultValuePipe } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('상품') // ← Swagger 문서에서 그룹 이름으로 나옴
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ){
    return this.productService.findAllPaginated(page, limit);
  }

  @Get('search')
  @UseGuards(JwtAuthGuard)
  searchProducts(
    @Query('name') name: string, @Query('category') category:string
  ){
    console.log('🔍 name:', name, 'category:', category);
    return this.productService.search({name, category});
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getProduct(
    @Param('id', ParseIntPipe) id: number
  ){
    return this.productService.findById(id);
  }
  
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto
  ){
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteProduct(
    @Param('id', ParseIntPipe) id: number
  ){
    return this.productService.delete(id);
  }

  @Post('bulk')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: CreateProductDto, isArray: true })
  createProducts(@Body() createProductDtos: CreateProductDto[]) {
    return this.productService.createBulk(createProductDtos);
  }

}
