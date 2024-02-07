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
  }: UserRequest): Promise<UserResponse | null> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      return null
    }

    return {
      user
    }
  }

  async getLikesByUserId(userId: number): Promise<Like[] | null> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      return null
    }

    const userLikedImages = await this.userRepository.getUserLikedImages(userId);

    return userLikedImages || [];
  }

  async getLikeById(likedImageId: number): Promise<Like | null> {
    const like = await this.likeRepository.getLikedImageById(likedImageId);

    if (!like) {
      return null
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
  }: LikeRequest): Promise<LikeResponse | null> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      return null
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
  }: LikeRequest): Promise<LikeResponse | null> {
    const user = await this.userRepository.getUser(userId);

    if (!user) {
      return null
    }

    await this.likeRepository.removeLike(likedImageId)
    await this.userRepository.removeLikedImage(user.id, likedImageId)

    const imageWithLikeRemoved = await this.likeRepository.getLikedImageById(likedImageId)

    return {
      like: imageWithLikeRemoved!
    }
  }
}