// blog.service.ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { BlogModel } from '../user/blog.model'
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

	async findAllByUser(userId: string) {
		return this.BlogModel.find({ userId })
	}

	async findAll () {
		return this.BlogModel.find()
	}
}
