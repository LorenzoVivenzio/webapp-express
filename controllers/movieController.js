import connection from "../database/db.js"

function index(req, res, next) {

    const query = "SELECT * FROM `movies`";

    connection.query(query, (err, result) => {
        if (err) return next(err)
        return res.json({
            results: result,
        })
    })
}

function show(req, res) {

    const id = req.params.id

    const query = 'SELECT * FROM movies WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) 
            return res.status(500)
        .json({ error: 'Database query failed' });
        if (results.length === 0) 
            return res.status(404)
        .json({ error: 'Movie not found' });

        res.json(results[0]);
    });
}

export default {
    index,
    show,
}