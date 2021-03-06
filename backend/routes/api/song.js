const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult} = require('express-validator');
const { requireAuth } = require('../../utils/auth')
const db = require('../../db/models');

router.get('/',
asyncHandler(async(req,res) => {
    const songs = await db.Song.findAll({
        include: 'User'
    })
    return res.json(songs)
}))

const isSongValid = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid title')
        .notEmpty()
        .isLength({max:25})
        .withMessage('Length must not exceed 25 characters'),
    check('url')
        .exists({ checkFalsy: true})
        .notEmpty()
        .isURL()
        .withMessage('Please provide a song link'),
    check('imageUrl')
        .exists({ checkFalsy: true})
        .notEmpty()
        .isURL()
        .withMessage('Please provide an image link')
]
router.post('/',
requireAuth,
isSongValid,
asyncHandler(async(req,res) => {
    const { title, url, imageUrl,userId } = req.body
    const song = db.Song.build({title, url, imageUrl, userId})
    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        const saved = await song.save()
        return res.json(saved)
    }else{
        const errors = validatorErrors.array().map(error => error.msg);
        return res.json(errors)
    }
}))

router.delete('/delete',
requireAuth,
asyncHandler(async(req,res) => {
    const { id } = req.body
    const song = await db.Song.findByPk(id)
    const data = await song.destroy()
    if(data){
        return res.json('success')
    }
}))

router.get('/:id',
asyncHandler(async(req,res) => {
    const songId = req.params.id
    const song = await db.Song.findByPk(songId, {
        include: 'User'
    })
    return res.json(song)
}))
const isUpdateValid = [
    check('title')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a title'),
    check('imageUrl')
        .exists({ checkFalsy: true})
        .notEmpty()
        .isURL()
        .withMessage('Please provide an image link')
]
router.put('/:id',
isUpdateValid,
asyncHandler(async(req,res) => {
    const { id, title, imageUrl } = req.body
    const user = await db.Song.findByPk(id)
    user.title = title
    user.imageUrl = imageUrl
    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        await user.save()
        return res.json('success')
    }else{
        const errors = validatorErrors.array().map(error => error.msg);
        return res.json(errors)
    }

}))
module.exports = router
