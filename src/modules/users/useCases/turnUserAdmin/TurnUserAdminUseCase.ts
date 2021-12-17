import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  private checkIfUserExists(id: string): void {
    const user = this.usersRepository.findById(id)
    if (!user) throw new Error("Usuário não encontrado")
  }

  execute({ user_id }: IRequest): User {
    this.checkIfUserExists(user_id)

    const user = this.usersRepository.findById(user_id)
    this.usersRepository.turnAdmin(user)
    return user
  }
}

export { TurnUserAdminUseCase };
