import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute ({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    // Verificar se email existe
    const user = await usersRepository.findOne({
      email
    })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    // Verificar se senha está correta

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }

    // Gerar token
    const token = sign(
      {
        email: user.email
      },
      '18abb4747aefe043d916e7455db35f93',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return token
  }
}

export { AuthenticateUserService }
