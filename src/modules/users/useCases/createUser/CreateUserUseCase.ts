import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  private checkIfUserEmailIsAlreadyTaken(email: string): void {
    const user = this.usersRepository.findByEmail(email)

    if (user && Object.values(user).length > 0)
      throw new Error("Email já esta em uso")
  }

  execute({ email, name }: IRequest): User {
    this.checkIfUserEmailIsAlreadyTaken(email)
    return this.usersRepository.create({ name, email })
  }
}

export { CreateUserUseCase };
