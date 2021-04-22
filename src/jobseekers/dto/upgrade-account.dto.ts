import { IsNotEmpty } from "class-validator";

export default class UpgradeAccountDto {
    @IsNotEmpty()
    readonly id: number;
    @IsNotEmpty()
    readonly type: string;
    @IsNotEmpty()
    readonly autoextensive: boolean;
}