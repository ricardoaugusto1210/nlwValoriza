import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization

  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(' ')

  verify(token, '18abb4747aefe043d916e7455db35f93')
  // Validar se token é válido

  // Recuperar informações do usuário
  return next()
}
