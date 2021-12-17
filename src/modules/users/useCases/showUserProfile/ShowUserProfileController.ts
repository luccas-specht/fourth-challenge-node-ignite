import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { params: { user_id } } = request

    const userProfile = this.showUserProfileUseCase.execute({ user_id })
    return response.json(userProfile)
  }
}

export { ShowUserProfileController };
