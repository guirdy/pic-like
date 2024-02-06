import { LikeRepository } from "src/repositories/like-repository";
import { LikeServices } from "../piclike-services";
import { UserRepository } from "src/repositories/user-repository";

export function makeGetLikeServices() {
  const userRepository = new UserRepository();
  const likeRepository = new LikeRepository();
  const pickLikeServices = new LikeServices(userRepository, likeRepository);

  return pickLikeServices;
}
