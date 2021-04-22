import { IsNotEmpty } from "class-validator";

export default class EditEmpDto {
    @IsNotEmpty()
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly projects: number[];
}
