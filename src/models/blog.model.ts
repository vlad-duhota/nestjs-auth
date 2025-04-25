import { prop, Ref } from '@typegoose/typegoose'
import { UserModel } from './user.model'

export class BlogModel {
	@prop({ required: true })
	title: string

	@prop({ required: true })
	content: string

	@prop({ ref: () => UserModel, required: true })
	userId: Ref<UserModel>
}
