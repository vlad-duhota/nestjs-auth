// blog.dto.ts
import { IsString } from 'class-validator'

export class BlogDto {
	@IsString()
	title: string

	@IsString()
	content: string
}