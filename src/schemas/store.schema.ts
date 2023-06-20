import {IsString,IsNotEmpty, Length, IsArray, IsOptional} from 'class-validator'

class createStoreSchema{

    @IsString()
    @IsNotEmpty()
    @Length(5,15)
    name: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsArray()
    @IsOptional()
    products: Array<string>
}


export {createStoreSchema}