import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Reflector } from '@nestjs/core'
import { InjectModel } from 'nestjs-typegoose'
import { UserModel } from 'src/user/user.model'
import { ModelType } from '@typegoose/typegoose/lib/types'

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(
		private readonly jwtService: JwtService,
		private readonly reflector: Reflector,
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const authHeader = request.headers.authorization

		if (!authHeader || !authHeader.startsWith('Bearer '))
			return false

		const token = authHeader.split(' ')[1]

		try {
			const decoded = await this.jwtService.verifyAsync(token)
			const user = await this.UserModel.findById(decoded._id).exec()
			if (!user) return false

			request.user = user // attach user to request
			return true
		} catch (err) {
			return false
		}
	}
}
