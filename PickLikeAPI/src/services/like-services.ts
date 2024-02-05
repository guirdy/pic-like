import { Like } from "src/models/likes";
import { LikeRepository } from "src/repositories/like-repository";
import { UserRepository } from "src/repositories/user-repository";

interface LikeRequest {
  userId: number,
  likedImage: Like
}

interface LikeResponse {
  like: Like
}

export class LikeServices {
  constructor(
    private userRepository: UserRepository,
    private likeRepository: LikeRepository
  ) { }

  async addLike({
    userId,
    likedImage
  }: LikeRequest): Promise<LikeResponse> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      throw new Error('User not found.')
    }

    await this.likeRepository.addLike(likedImage)
    await this.userRepository.addLikedImage(user.id, likedImage)

    return {
      like: likedImage
    }
  }
}