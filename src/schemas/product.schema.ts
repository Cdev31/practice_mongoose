import {IsString,IsNotEmpty,Length,IsInt} from 'class-validator'

class createProductSchema {
    @IsString()
    @IsNotEmpty()
    @Length(3, 12)
    readonly title: string

    @IsInt()
    @IsNotEmpty()
    readonly stock: number

    readonly price: number


}

export {createProductSchema}