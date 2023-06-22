import {IsNotEmpty, IsInt, IsString, IsEmail, ValidateNested, IsArray} from 'class-validator'

class ProductrReturn{

    @IsString()
    @IsNotEmpty()
    readonly product_id: string

    @IsInt()
    @IsNotEmpty()
    readonly quantity: number
}


class UserReturn{

    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string
}


class createReturnSchema{

    @IsString()
    @IsNotEmpty()
    readonly store: string

    @ValidateNested()
    @IsNotEmpty()
    readonly user: UserReturn

    @ValidateNested()
    @IsNotEmpty()
    @IsArray()
    readonly products: Array<ProductrReturn>
}


export {createReturnSchema}