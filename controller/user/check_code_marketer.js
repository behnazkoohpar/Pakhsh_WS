/**
 * Created by Behnaz on 10/08/2019.
 */
var express = require('express')
    , pass = MODELES.CheckActivationCode
    , router = express.Router()
    , dateTime = require('node-datetime');

router.all('/', function (req, res) {
    var Input = {
        Code: req.body.code
    };
    pass.CheckMarketerCode({Input: Input}, function (err, result) {
        if (err != null)
            RESPOND.Response(err, {
                success: "0",
                message: err
            }, res);
        if (result.rowsAffected[0] > 0)
            RESPOND.Response(err, {
                success: "1",
                data: result.recordset
            }, res);
        else
            RESPOND.Response(err, {
                success: "0",
                message: CONSTANT.ErrorFormat.Code_Error
            }, res);
    })
});
module.exports = router;
