import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { BlogModel } from '../models/blog.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { BlogDto } from './blog.dto'

@Injectable()
export class BlogService {
	constructor(
		@InjectModel(BlogModel) private readonly BlogModel: ModelType<BlogModel>
	) {}

	async create(dto: BlogDto, userId: string) {
		return this.BlogModel.create({
			...dto,
			userId,
		})
	}

	// async findAllByUser(userId: string) {
	// 	return this.BlogModel.find({ userId })
	// }


	async findPost(id: string) {
		return this.BlogModel.findOne({_id: id})
	}

	async findAll () {
		return this.BlogModel.find()
	}
}
