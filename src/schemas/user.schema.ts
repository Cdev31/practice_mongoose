import {IsString,IsNotEmpty, Length, IsEmail,IsIn, Matches, IsDate} from 'class-validator'

class createUserSchema{

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly firstName:string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly surname: string

    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.[A-Za-z0-9])(?=.[!@?])[A-Za-z0-9!@?]{8,}\*$/)
    readonly password: string

    @IsDate()
    @IsNotEmpty()
    readonly dateOfBirth: Date

    @IsIn(['Normal','Administrator'])
    readonly role: string
}


class registerUserSchema{

}



export {createUserSchema}