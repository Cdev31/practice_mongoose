import {IsString,IsNotEmpty,Length,IsInt,IsIn,IsOptional, IsNumber} from 'class-validator'


class queryProductSchema{
    @IsInt()
    @IsOptional()
    readonly limit: number
    @IsInt()
    @IsOptional()
    readonly offset: number
    
    readonly min_price: number
    readonly max_price: number
}

class createProductSchema {
    
    @IsString()
    @IsNotEmpty()
    @Length(3, 70)
    readonly title: string 

    @IsString()
    @IsNotEmpty()
    @Length(20,120)
    readonly description: string

    @IsInt()
    @IsNotEmpty()
    readonly stock: number

    @IsNumber()
    @IsNotEmpty()
    readonly price: number

    @IsIn(['Electronic','Clothes','Shoes'])
    @IsNotEmpty()
    readonly category: string

}

class updateProductSchema{

    @IsString()
    @IsOptional()
    @Length(3, 70)
    readonly title?: string 

    @IsString()
    @IsOptional()
    @Length(20,120)
    readonly description?: string

    @IsInt()
    @IsOptional()
    readonly stock?: number

    @IsNumber()
    @IsOptional()
    readonly price?: number

}

class findProductByIdSchema{

    @IsString()
    @IsNotEmpty()
    readonly id: string
}

export {createProductSchema,queryProductSchema,updateProductSchema,findProductByIdSchema}