const router = require('express').Router();
// const { Category, Dog } = require('../../models');

// // The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   Category.findAll( {include: [{model: Dog}]})
//   .then((data) => res.json(data))
//   .catch((error) => res.json(error))
// });

// router.get('/:id', (req, res) => {
//   Category.findByPk(req.params.id, { include: [{ model: Dog}] })
//   .then((data) => res.json(data))
// });

// router.post('/', (req, res) => {
//   Category.create({ category_name: req.body.category_name})
//   .then((category) => {
//     res.json(category)
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(400).json(err);
//   });
// }
// );

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
//   Category.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((Dog) => {
//       // find all associated tags from DogTag
//       res.json({"Message": "Category updated",
//                 "response":  req.params.id })
//       return Category.findAll( {include: [{model: Dog}]})
//     })
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
  
//   Category.destroy({where: {id: req.params.id} })
//   .then((category) => {
//     res.status(200).json({
//       "Message": `"Category with id: ${req.params.id} was deleted"`,
//       "Result": req.body.category_name
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(400).json(err);
//   });
// });

module.exports = router;
