import { IsNotEmpty } from "class-validator";

export default class EditAccountDto {
    @IsNotEmpty()
    readonly id: number;
    @IsNotEmpty()
    readonly autoextensive: boolean;
}