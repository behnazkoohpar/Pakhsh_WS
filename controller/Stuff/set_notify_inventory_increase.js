/**
 * Created by Behnaz on 10/08/2019.
 */
var express = require('express')
    , pass = MODELES.StuffList
    , router = express.Router()
    , moment = require('moment-jalaali') ;

router.all('/', function (req, res) {
    var Input = {
        UserId: req.body.user_id,
        StuffBrandId: req.body.stuff_brand_id,
        CreateRequest: req.body.create_request,
        NowDate: moment().format("Y-M-D HH:mm:s")
    };
    pass.setNotifyInventoryIncrease({ Input: Input }, function (err, result) {
        if (err != null)
            RESPOND.Response(err, {
                success: "0",
                message: err
            }, res);
        if (result.rowsAffected[0] > 0)
            RESPOND.Response(err, {
                success: "1"
            }, res);
        else
            RESPOND.Response(err, {
                success: "0",
                message: CONSTANT.ErrorFormat.User_Not_Found
            }, res);
    })
});
module.exports = router;