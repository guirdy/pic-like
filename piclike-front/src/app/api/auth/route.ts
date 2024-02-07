import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { AuthResponse } from '@/types/auth'

const secret = process.env.NEXTAUTH_SECRET!

const staticUser = {
  id: 1,
  email: 'gui@gui.com',
  password: '123456',
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  if (email === staticUser.email && password === staticUser.password) {
    const token = jwt.sign({ email: 'gui@gui.com' }, secret, {
      expiresIn: '1h',
    })

    return NextResponse.json(
      {
        token,
      },
      { status: 200 },
    )
  }

  return NextResponse.json(
    {
      error: 'Unauthorized',
    },
    { status: 401 },
  )
}
