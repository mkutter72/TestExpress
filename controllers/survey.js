'use strict';


var Survey = require('../models').model('Survey');

module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    makenew : {
        post : function(req, res, next) {
            if(!req.body || !req.body.surveyname || !req.body.surveyquestion) {
                var err = new Error("Empty fields.");
                return next(err);
            }

            var pSurvey = new Promise(function(res, rej) {
                Survey.create({
                    surveyName : req.body.surveyname,
                    surveyQuestion : req.body.surveyquestion
                }, function(err, user) {
                    if(err) {
                        rej(err);
                        return;
                    }

                    res(user);
                });
            });
            pSurvey.then(function() {
                res.sendStatus(200);
            }).catch(function(err) {
                next(err);
            });
        }
    }
};
