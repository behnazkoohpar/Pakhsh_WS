/**
 * Created by Behnaz on 10/08/2019.
 */
var express = require('express')
    , pass = MODELES.StuffList
    , router = express.Router();

router.all('/', function (req, res) {
    var Input = {
        Offset: req.body.offset,
        Next: req.body.next,
        UserId: req.body.user_id
    };
    pass.GetNotifyInventoryList( { Input: Input },function (err, result) {
        if (err != null)
            RESPOND.Response(err, {
                success: "0",
                message: err
            }, res);
        if (result.recordset.length > 0)
            RESPOND.Response(err, {
                data: result.recordset
            }, res);
        else
            RESPOND.Response(err, {
                success: "0",
                message: CONSTANT.ErrorStuff.Not_Load_Any_Notify
            }, res);
    })
});
module.exports = router;