import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { params: { user_id } } = request

    const userAdmin = this.turnUserAdminUseCase.execute({ user_id })
    return response.json(userAdmin)
  }
}

export { TurnUserAdminController };
