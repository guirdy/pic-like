import { AuthResponse } from '@/types/auth'
import { User } from '@/types/user'

export async function authService(user: User) {
  const authResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/auth`, {
    method: 'POST',
    body: JSON.stringify(user),
  })

  if (!authResponse.ok) {
    throw new Error('Failed to authenticate')
  }

  const { token } = (await authResponse.json()) as AuthResponse

  return {
    token,
  }
}
