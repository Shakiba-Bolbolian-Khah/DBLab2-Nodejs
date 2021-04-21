import { IsNotEmpty, IsOptional } from "class-validator";

export default class BookDto {

    @IsNotEmpty()
    readonly bookID: number;

    @IsOptional()
    readonly name: string;

    @IsOptional()
    readonly userID: number;

    @IsOptional()
    readonly genreIDs: number[];
} 