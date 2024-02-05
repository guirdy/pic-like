import { User } from "src/models/user";
import { UserRepository } from "src/repositories/user-repository";

interface UserRequest {
  userId: number,
}

interface UserResponse {
  user: User
}

export class UserServices {
  constructor(
    private userRepository: UserRepository
  ) { }

  async getUser({
    userId
  }: UserRequest): Promise<UserResponse> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      throw new Error('User not found.')
    }

    return {
      user
    }
  }
}