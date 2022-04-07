const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth')
const { check, validationResult} = require('express-validator');
const db = require('../../db/models');

router.get('/:id',
asyncHandler(async(req,res) => {
    const comments = await db.Comment.findAll({
        where:{songId: req.params.id},
        include: 'User'
    })
    return res.json(comments)
}))

const isCommentValid = [
    check('body')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a comment'),
]



router.post('/:id',
isCommentValid,
asyncHandler(async(req,res) => {
    const {userId, songId, body} = req.body
    const comment = db.Comment.build({userId, songId, body})
    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        const saved = await comment.save()
        return res.json(saved)
    }else{
        const errors = validatorErrors.array().map(error => error.msg);
        return res.json(errors)
    }
}))
module.exports = router;
