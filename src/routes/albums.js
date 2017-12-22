import express from 'express'

import {
  getAlbums,
  getAlbumById,
  countLike,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getAlbums()
    .then(albums => res.render('albums/index', {albums}))
    .catch(next)
})

router.get('/:albumID', (req, res, next) => {
  getAlbumById(req.params.albumID)
    .then((album) => {
      // Get likes for this album
      countLike(req.params.albumId)
        .then((likes) => {
          const likeCount = likes.length
          res.render('albums/album', {album, likeCount})
        })
    })
})

router.post('/:albumID', (req, res, next) => {

})


export default router
