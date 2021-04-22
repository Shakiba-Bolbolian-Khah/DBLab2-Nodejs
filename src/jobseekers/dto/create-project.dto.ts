import { IsNotEmpty } from "class-validator";

export default class CreateProjectDto {
    @IsNotEmpty()
    readonly field: string;
    @IsNotEmpty()
    readonly subfield: string;
    @IsNotEmpty()
    readonly title: string;
    @IsNotEmpty()
    readonly desc: string;
    @IsNotEmpty()
    readonly skills: string;
    @IsNotEmpty()
    readonly size: number;
    @IsNotEmpty()
    readonly budget: number;
    @IsNotEmpty()
    readonly type: string;
    @IsNotEmpty()
    readonly deadline: number;
    @IsNotEmpty()
    readonly employerID: number;
}

