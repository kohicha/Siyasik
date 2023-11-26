exports.catalog = async (req, res) =>{
    const locals ={
        title: "Catalog",
        description: "I still really miss her oh me? im listening to linux by ubuntu"
    }
    res.render('catalog/index', {
        locals,
        layout:'../views/layouts/frontpage'
    })
};