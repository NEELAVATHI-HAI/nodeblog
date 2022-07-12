const res = require("express/lib/response")

const get=(req,res)=>
{
    res.send([
        {
        "name":"Neela",
        "title":"Hindu weddings are steeped richly in tradition and often filled with beautiful customs and rituals",
        "img":"https://www.theknot.com/tk-media/images/797cb57e-3d12-40e1-8ce3-a3933833ecc0~rs_768.h"
    },
    {
        "name":"Neela",
        "title":"Hindu parents should teach their children to be both knowledgeable and proud of their religion",
        "img":"https://hinduismtoday.b-cdn.net/wp-content/uploads/2021/12/instill-values-imo.jpg"
    },
    {
        "name":"Neela",
        "title":"Jesus of Nazareth, most commonly referred to as Jesus Christ is a Biblical figure of Christian lore.",
        "img":"https://static.wikia.nocookie.net/headhuntersholosuite/images/d/d8/Jesus_Christ.jpg/revision/latest/scale-to-width-down/225?cb=20171123000925"
    },
    {
        "name":"Neela",
        "title":"Hindu weddings are steeped richly in tradition and often filled with beautiful customs and rituals",
        "img":"https://www.theknot.com/tk-media/images/797cb57e-3d12-40e1-8ce3-a3933833ecc0~rs_768.h"
    },
])
}
module.exports.apiController = get;