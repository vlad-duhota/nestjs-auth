// Comment.service.ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { CommentModel } from '../models/comment.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { CommentDto } from './Comment.dto'

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(CommentModel) private readonly CommentModel: ModelType<CommentModel>
    ) {}

    async create(dto: CommentDto, userId: string) {
        return this.CommentModel.create({
            ...dto,
            userId,
        })
    }

    async findAllByPost(postId: string) {
        return this.CommentModel.find({ postId})
    }
}
