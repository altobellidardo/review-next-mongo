import User from '@/models/user'
import { connectDB } from '@/libs/dbconnection'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST (request) {
  const { username, email, password } = await request.json()

  try {
    await connectDB()

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'password must be at least 6 characters' }, { status: 400 }
      )
    } else if (password.length > 20) {
      return NextResponse.json(
        { message: 'password must be less than 20 characters' }, { status: 400 }
      )
    }

    const emailFound = await User.findOne({ email })
    if (emailFound) {
      return NextResponse.json(
        { message: 'email already registered' }, { status: 409 }
      )
    }

    const usernameFound = await User.findOne({ username })
    if (usernameFound) {
      return NextResponse.json(
        { message: 'username already taken' }, { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })
    const savedUser = await newUser.save()

    return NextResponse.json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email
    })
  } catch (error) {
    return NextResponse.json(
      { message: error.message }, { status: 400 }
    )
  }
}
