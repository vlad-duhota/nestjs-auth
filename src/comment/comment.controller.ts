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
import { CommentDto } from './comment.dto'
import { CommentService } from './comment.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'

@Controller('comment')
export class CommentController {
    constructor(private readonly CommentService: CommentService) {}

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('/create')
    async create(@Body() dto: CommentDto, @Req() req) {
        return this.CommentService.create(dto, req.user._id)
    }

    @Get('/get/:id')
    async getMyPosts(@Param('id') id) {
        return this.CommentService.findAllByPost(id)
    }
}
