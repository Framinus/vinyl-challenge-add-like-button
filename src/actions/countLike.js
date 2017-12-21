import db from '../db'

export default function countLike(albumId) {
  return db.any('SELECT * from AlbumLikes WHERE albums_id=$1', [albumId])
}
