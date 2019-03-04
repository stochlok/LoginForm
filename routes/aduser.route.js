// adunit.route.js

const express = require('express');
const app = express();
const adUserRoutes = express.Router();

// Require AdUnit model in our routes module
let AdUser = require('../models/AdUser');

// Defined store route
adUserRoutes.route('/add').post(function (req, res) {
  let adUser = new AdUser(req.body);
  adUser.save()
    .then(game => {
    res.status(200).json({'adUser': 'AdUser in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
adUserRoutes.route('/').get(function (req, res) {
    AdUser.find(function (err, adUsers){
    if(err){
      console.log(err);
    }
    else {
      res.json(adUsers);
    }
  });
});

// Defined edit route
adUserRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdUser.findById(id, function (err, adUser){
      res.json(adUser);
  });
});

//  Defined update route
adUserRoutes.route('/update/:id').post(function (req, res) {
    AdUser.findById(req.params.id, function(err, adUser) {
    if (!adUser)
      return next(new Error('Could not load Document'));
    else {
        adUser.user_nick = req.body.user_nick;
        adUser.user_pass = req.body.user_pass;

        adUser.save().then(adUser => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adUserRoutes.route('/delete/:id').get(function (req, res) {
    AdUser.findByIdAndRemove({_id: req.params.id}, function(err, adUser){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = adUserRoutes;