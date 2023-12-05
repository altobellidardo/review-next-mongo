import { connectDB } from '@/libs/dbconnection'
import { NextResponse } from 'next/server'
import User from '@/models/user'

export async function GET (_req, { params }) {
  await connectDB()
  const foundUser = await User.findById(params.id)
  return NextResponse.json(foundUser)
}
