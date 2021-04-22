import { IsNotEmpty } from "class-validator";

export default class EditFreelDto {
    @IsNotEmpty()
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
}
