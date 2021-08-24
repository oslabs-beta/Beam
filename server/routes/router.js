const express = require('express');
const sqlController = require('../controllers/sqlController.js');
// const userController = require('../controllers/userController.js');
// const cookieController = require('../controllers/cookieController');
// const sessionController = require('../controllers/sessionController');

const router = express.Router();

///' getItems
// /item -> adds items
// /deleteItem -> deletes Item
// /borrow -> sets item as borrowed
// /searchItem -> returns item

// get request for what?

// router.get('/',
//   gearController.getItems,
//   (req, res) => res.status(200).json(res.locals.items));

// set up later

// router.post('/signup',
//   userController.createUser,
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
//   (req, res) => {
//     res.redirect('http://localhost:8080/userinventory');
//   });

// router.post('/login',
//   userController.verifyUser,
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
//   (req, res) => {
//     res.redirect('http://localhost:8080/userinventory')
//   });


//res.status(200).json(res.locals.items));

// router.post('/addItem/:user',
//   gearController.addItem,
//   gearController.getItems,
//   (req, res) => res.status(200).json(res.locals.items));

router.get('/uri',
  sqlController.getTableData,
  // sqlController.visualize,
  // gqlController.makeSchema,
  // gqlController.makeResolver,
  (req, res) => res.status(200).json(res.locals.arrayTables));

// router.post('/deleteItem',
//   gearController.deleteItem,
//   gearController.getItems,
//   (req, res) => res.status(200).json(res.locals.items));

// router.post('/borrow/:user',
//   gearController.borrow,
//   gearController.getItems,
//   (req, res) => res.status(200).json(res.locals.items));

// router.get('/findItem',
//   gearController.findItem,
//   (req, res) => res.status(200).json(res.locals.item));

// router.get('/yourInventory/:user',
//   sessionController.isLoggedIn,
//   gearController.userInventory,
//   (req, res) => res.status(200).json(res.locals.userItems)
// )

module.exports = router;