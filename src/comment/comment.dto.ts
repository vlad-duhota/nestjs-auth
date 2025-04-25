import { IsNumber, IsString } from 'class-validator'

export class CommentDto {
    @IsString()
    postId: number

    @IsString() 
    userId: string

    @IsString()
    content: string
}