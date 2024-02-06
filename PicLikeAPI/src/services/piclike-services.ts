import { Like } from "src/models/likes";
import { User } from "src/models/user";
import { LikeRepository } from "src/repositories/like-repository";
import { UserRepository } from "src/repositories/user-repository";

interface LikeRequest {
  userId: number,
  likedImageId: number
}

interface LikeResponse {
  like: Like
}

interface UserRequest {
  userId: number,
}

interface UserResponse {
  user: User
}

export class LikeServices {
  constructor(
    private userRepository: UserRepository,
    private likeRepository: LikeRepository
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

  async getLikeById(likedImageId: number): Promise<Like> {
    const like = await this.likeRepository.getLikedImageById(likedImageId);

    if (!like) {
      throw new Error('Liked image not found.')
    }

    return like;
  }

  async getLikes(): Promise<Like[]> {
    const likes = await this.likeRepository.getLikes();

    return likes;
  }

  async addLike({
    userId,
    likedImageId
  }: LikeRequest): Promise<LikeResponse> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      throw new Error('User not found.')
    }

    await this.likeRepository.addLike(likedImageId)
    await this.userRepository.addLikedImage(user.id, likedImageId)

    const likedImageAdded = await this.likeRepository.getLikedImageById(likedImageId)

    return {
      like: likedImageAdded!
    }
  }

  async removeLike({
    userId,
    likedImageId
  }: LikeRequest): Promise<LikeResponse> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      throw new Error('User not found.')
    }

    await this.likeRepository.removeLike(likedImageId)
    await this.userRepository.removeLikedImage(user.id, likedImageId)

    const imageWithLikeRemoved = await this.likeRepository.getLikedImageById(likedImageId)

    return {
      like: imageWithLikeRemoved!
    }
  }
}