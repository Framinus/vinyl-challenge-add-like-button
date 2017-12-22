import express from 'express'

import {addLike, countLike} from '../actions'

const router = express.Router()

router.post('/likes/:albumId', (req, res) => {
  const {albumId} = req.params
  const userId = req.session.user
  console.log('userId', userId)
  addLike(userId, albumId)
    .then((response) => {
      res.json({response})
    })
    .catch((err) => {
      console.error(err)
    })
})

export default router
