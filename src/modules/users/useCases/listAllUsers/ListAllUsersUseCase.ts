import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  private checkIfUserExists(id: string): void {
    const user = this.usersRepository.findById(id)
    if (!user) throw new Error("Usuário não encontrado")
  }

  private checkIfRequesterClientIsAnAdminUser({ user_id }: IRequest): void {
    const user = this.usersRepository.findById(String(user_id))
    if (user && !user.admin) throw new Error("Usuário não encontrado")
  }

  execute({ user_id }: IRequest): User[] {
    this.checkIfUserExists(user_id)
    this.checkIfRequesterClientIsAnAdminUser({ user_id })

    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
