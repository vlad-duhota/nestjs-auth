import {
	Body,
	Controller,
	Get,
	Param,
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

	// @UseGuards(JwtAuthGuard)
	@Get('/get/:id')
	async getMyPosts(@Param('id') id) {
		return this.BlogService.findPost(id)
	}

	@Get('/getAll')
	async getPosts(@Req() req) {
		return this.BlogService.findAll()
	}
}
