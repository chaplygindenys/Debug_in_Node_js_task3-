const router = require('express').Router();
const Game = require('../db').import('../models/game');

router.route('/all').get(
    async (req, res) => {
   const game = await Game.findAll({where: {owner_id: req.user.id}})
        if(!game){
            res.status(200).json({
                game: game,
                message: "Game created."
            })
        }else {
            res.status(500).json({
                message: "Data not found."
            })
        }
})

router.route('/:id').get(
    async (req, res) => {
        const game = await Game.findOne({where: {id: req.params.id, owner_id: req.user.id}})
        if (!game) {
            res.status(200).json({
                game: game
            })
        } else {
            res.status(500).json({
                message: "Data not found."
            })
        }
    }
);

router.route('/create').post(
    async (req, res) => {
  const game = await Game.create({
        title: req.body.game.title,
        owner_id: req.body.user.id,
        studio: req.body.game.studio,
        esrb_rating: req.body.game.esrb_rating,
        user_rating: req.body.game.user_rating,
        have_played: req.body.game.have_played
    })
        if(!game){
                res.status(200).json({
                    game: game,
                    message: "Game created."
                })
            }else {
                res.status(500).json({
                    message: "Data not found."
                })
            }

});

router.route('/update/:id').put(
    async (req, res) => {
    const game = await Game.update({
            title: req.body.game.title,
            studio: req.body.game.studio,
            esrb_rating: req.body.game.esrb_rating,
            user_rating: req.body.game.user_rating,
            have_played: req.body.game.have_played
        },
        {
            where: {
                id: req.params.id,
                owner_id: req.user
            }
        })
        if(game) {
            res.status(200).json({
                game: game,
                message: "Successfully deleted"
            })
        }else {
            res.status(500).json({
                message: "Data not found."
            })
        }
})

router.route('/remove/:id').delete(
    async (req, res) => {
   const game = await Game.destroy({
        where: {
            id: req.params.id,
            owner_id: req.user.id
        }
    })
        if(game) {
                res.status(200).json({
                    game: game,
                    message: "Successfully deleted"
                })
            }else {
                res.status(500).json({
                    message: "Data not found."
                })
            }
});

module.exports = router;