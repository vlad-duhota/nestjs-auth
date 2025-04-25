import { prop, Ref } from '@typegoose/typegoose'
import { UserModel } from './user.model'
import { BlogModel } from './blog.model'

export class CommentModel {
	@prop({ required: true })
	content: string

	@prop({ ref: () => UserModel, required: true })
	userId: Ref<UserModel>

    @prop({ ref: () => BlogModel, required: true })
	postId: Ref<BlogModel>
}
