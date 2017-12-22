import db from '../db'

export default function addLike(userId, albumId) {
  return db.one(`INSERT INTO albumlikes (user_id, albums_id) VALUES ($1, $2) RETURNING *`, [userId, albumId])
}
