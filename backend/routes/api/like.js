const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth')
const db = require('../../db/models');


router.post('/new',
requireAuth,
asyncHandler( async(req, res) => {
    let {userId, songId} = req.body

    const relation = await db.Like.findOne({
      where: { userId, songId }
    });

    if (relation) {
      relation.destroy();
      res.json("isLiked");
    } else {
      await db.Like.create(req.body);
      res.json("isNot");
    }
  }));


  router.post('/isLiked',
  requireAuth,
  asyncHandler(async(req,res) => {
    let {userId, songId} = req.body

    const relation = await db.Like.findOne({
      where: { userId, songId }
    });

    if(relation){
      res.json('isLiked')
    }else{
      res.json('isNot')
    }
  }))

  router.get('/:id',
  asyncHandler(async(req,res) => {
    const id = req.params.id
    const likes = await db.Like.findAll({
      where: {songId : id}
    })
    res.json(likes.length)
  }))

  module.exports = router;
