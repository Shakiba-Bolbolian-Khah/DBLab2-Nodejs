import { IsNotEmpty } from "class-validator";

export default class CreateEmpDto {
    @IsNotEmpty()
    readonly firstName: string;
    @IsNotEmpty()
    readonly lastName: string;
    @IsNotEmpty()
    readonly email: string;
    @IsNotEmpty()
    readonly phone: string;
}
