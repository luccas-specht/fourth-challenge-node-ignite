import { Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: any, response: Response): Response {
    const { headers: { user_id } } = request

    const users = this.listAllUsersUseCase.execute({ user_id })
    return response.json(users)
  }
}

export { ListAllUsersController };
