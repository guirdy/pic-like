import { Like } from "./likes";

export class User {
  id: number;
  email: string;
  password: string;
  likedImages: Like[];

  private static nextId = 1;

  constructor(email: string, password: string) {
    this.id = User.nextId++;
    this.email = email;
    this.password = password;
    this.likedImages = []
  }
}