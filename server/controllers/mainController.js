/**
 * GET /
 * Homepage
 */


exports.homepage = async (req, res) =>{
    const locals ={
        title: "i miss her",
        description: "I still really miss her oh me? im listening to linux by ubuntu"
    }
    res.render('index', locals)
};
