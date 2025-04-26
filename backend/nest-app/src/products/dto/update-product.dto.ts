import { IsNotEmpty, IsInt, IsOptional, IsString } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    @ApiProperty({ example: '무선 키보드', description: '상품 이름' })
    name?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    @ApiProperty({ example: 39000, description: '상품 가격' })
    price?: number;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    @ApiProperty({ example: '전자기기', description: '카테고리' })
    category?: string;
}