export class CreatePhotoResponseDto {
    id : number;
    url: string;
    constructor(id : number, url: string) {
        this.id = id;
        this.url = url;
    }
}