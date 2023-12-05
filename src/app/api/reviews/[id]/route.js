import Review from '@/models/review'
import { connectDB } from '@/libs/dbconnection'
import { NextResponse } from 'next/server'

export async function GET (_req, { params }) {
  try {
    connectDB()
    const reviewFound = await Review.findById(params.id)
    if (!reviewFound) {
      return NextResponse.json({ message: 'Review not found' }, { status: 404 })
    }
    return NextResponse.json(reviewFound)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}

export async function DELETE (_req, { params }) {
  try {
    connectDB()
    const reviewDeleted = await Review.findByIdAndDelete(params.id)
    if (!reviewDeleted) {
      return NextResponse.json({ message: 'Review not found' }, { status: 404 })
    }
    return NextResponse.json(reviewDeleted)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}

export async function PUT (request, { params }) {
  try {
    connectDB()
    const data = await request.json()
    const reviewUpdate = await Review.findByIdAndUpdate(params.id, data, { new: true })
    if (!reviewUpdate) {
      return NextResponse.json({ message: 'Review not found' }, { status: 404 })
    }
    return NextResponse.json(reviewUpdate)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}
