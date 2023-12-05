import { NextResponse } from 'next/server'
import { connectDB } from '@/libs/dbconnection'
import Review from '@/models/review'

export async function GET () {
  await connectDB()
  const reviews = await Review.find()
  return NextResponse.json(reviews)
}

export async function POST (request) {
  await connectDB()
  const data = await request.json()

  try {
    const newReview = new Review(data)
    const savedReview = await newReview.save()
    return NextResponse.json(savedReview)
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}
