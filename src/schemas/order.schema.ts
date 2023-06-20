import {IsDate, IsNotEmpty, IsInt, IsString, IsEmail, ValidateNested, IsArray} from 'class-validator'

class ProductOrder{

    @IsString()
    @IsNotEmpty()
    readonly product_id: string

    @IsInt()
    @IsNotEmpty()
    readonly quantity: number
}

class Store{

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    store_id: string
}

class UserOrder{

    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string
}


class createOrderSchema{

    @ValidateNested()
    @IsNotEmpty()
    readonly store: Store

    @ValidateNested()
    @IsNotEmpty()
    readonly user: UserOrder

    @ValidateNested()
    @IsNotEmpty()
    @IsArray()
    readonly products: Array<ProductOrder>
}


export {createOrderSchema}
