import { FastifyInstance } from 'fastify'
import { authenticate } from '@/http/controllers/users/authenticate'
import { register } from './register'
import { profile } from '@/http/controllers/users/profile'
import { verifyJwt } from '@/http/middlewares/verify-jwt'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
