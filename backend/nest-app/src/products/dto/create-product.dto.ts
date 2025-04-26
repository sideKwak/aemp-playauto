import { IsNotEmpty, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty() 
    @Type(() => String)
    @ApiProperty({ example: '무선 키보드', description: '상품 이름' })
    name: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsInt() 
    @ApiProperty({ example: 39000, description: '상품 가격' })
    price: number;

    @IsString()
    @Type(() => String)
    @IsNotEmpty() 
    @ApiProperty({ example: '전자기기', description: '카테고리' })
    category: string;
}