import { connect, connection } from 'mongoose'

const conn = {
  isConnected: false
}

export async function connectDB () {
  if (conn.isConnected) return

  const db = await connect(process.env.MONGO_URI)
  console.log(`MongoDB Connected, db name: ${db.connection.db.databaseName}`)
  conn.isConnected = db.connections[0].readyState
}

connection.on('error', (err) => {
  console.log(err)
})
