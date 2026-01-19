import connection from "../database/db.js"

function index(req, res, next){

    const query = "SELECT * FROM `movies`";

    connection.query(query, (err, result)=>{
        if (err) return next(err)
        return res.json({
            results : result,
        })
    })
}

function show(req, res){
console.log("show")
}

export default {
    index,
    show,
}