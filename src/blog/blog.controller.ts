import {
	Body,
	Controller,
	Get,
	Post,
	Req,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { BlogDto } from './blog.dto'
import { BlogService } from './blog.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'

@Controller('blog')
export class BlogController {
	constructor(private readonly BlogService: BlogService) {}

	@UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Post('/create')
	async create(@Body() dto: BlogDto, @Req() req) {
		return this.BlogService.create(dto, req.user._id)
	}

	@UseGuards(JwtAuthGuard)
	@Get('/get')
	async getMyPosts(@Req() req) {
		return this.BlogService.findAllByUser(req.user._id)
	}

	@Get('/getAll')
	async getPosts(@Req() req) {
		return this.BlogService.findAll()
	}
}
