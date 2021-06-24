const { Post } = require('../models');

const postdata = [
  {
    title: 'Testing Blog 123.',
    post_url: 'https://yahoo.con/tech/blog/upcoming',
    user_id: 1
  },
  {
    title: 'Great Things to Read About in Tech.',
    post_url: 'https://nypost.org/news/blahblahblah/checkthisout/youre/going/to/like/it',
    user_id: 2
  },
  {
    title: 'Silicon Slopes vs Silicon Valley.',
    post_url: 'https://usa.epu/utah/vs/ca/who/will/win',
    user_id: 3
  },
  {
    title: 'I am so tired.',
    post_url: 'http://uofu.edu/learning/how/to/be/a/developer/bootcamp/got/me/exhausted',
    user_id: 4
  },
  {
    title: 'No One Really Reads This Do They?.',
    post_url: 'http://google.ut/Having/too/much/fun/',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;