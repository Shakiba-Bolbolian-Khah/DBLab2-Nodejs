export default class EditProjectDto {
    readonly id: number;
    readonly field: string;
    readonly subfield: string;
    readonly title: string;
    readonly desc: string;
    readonly skills: string;
    readonly size: number;
    readonly budget: number;
    readonly type: string;
    readonly deadline: number;
}