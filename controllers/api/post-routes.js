const router = require('express').Router();
const { Post, User, Comment, } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'body',
      'created_at'
    ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },

      {

        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log('There was an error!' + err);
    });
});


router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'body',
      'created_at'
    ],
    include: [

      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },

      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this ID. ' })
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log('There was an error!' + err);
      res.status(500).json(err);
    });
})


router.post('/', withAuth, (req, res) => {
  Post.create({

    title: req.body.title,
    body: req.body.body,
    post_url: req.body.post_url,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log('There was an error!' + err);
      res.status(500).json(err)
    });

});

router.put('/:id', withAuth, (req, res) => {
  Post.update({
    title: req.body.title,
    body: req.body.body
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this ID.' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log('There was an error!' + err);
      res.status(500).json(err);
    })
})

router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(400).json({ message: 'No post found with this ID.' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log('There was an error!' + err);
      res.status(500).json(err);
    })

})

module.exports = router;