var express = require('express');
var qnaRouter = express.Router();
// https://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context
qnaRouter.route('/')
    .get(function (req, res) {
        res.status(301).redirect('/FAQs/');
    });

qnaRouter.route('/#Das%20Mikrofon%20brummt.')
    .get(function (req, res) {
        res.status(301).redirect('/Frequently_Asked_Question/Microphone_Noise/');
    });

qnaRouter.route('/#Die%20Verbindung%20zur%20Kamera%20bricht%20immer%20wieder%20ab.')
    .get(function (req, res) {
        res.status(301).redirect('/Frequently_Asked_Question/Connection_Failures/');
    });


module.exports = qnaRouter;
