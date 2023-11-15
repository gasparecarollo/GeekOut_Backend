//name, is_favorite, genre, storyline, video_id, image_id, cost,

const checkName = (req, res, next) => {
    const name = req.body.name;

    if (name) {
        next()

    } else {
        res.status(400).json({ error: "Name is required" })
    }
}

const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite;

    if (typeof fav === "boolean") {
        if (fav === "true") {
            req.body.is_favorite = true
        } else {
            req.body.is_favorite = false
        }
        next()
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean" })
    }
}

const checkGenre = (req, res, next) => {

    const genre = req.body.genre;

    if (genre) {
        next()
    } else {
        res.status(400).json({ error: "Genre is required" })
    }
}

const checkStoryline = (req, res, next) => {
    const storyline = req.body.storyline;

    if (storyline) {
        next()
    } else {
        res.status(400).json({ error: "Storyline is required" })
    }
}

const checkVideo_id = (req, res, next) => {
    const video_id = req.body.video_id;

    if (typeof video_id === "string" && video_id.length <= 12) {
        next()
    } else {
        res.status(400).json({ error: "Video_id must be a String" })
    }
}

const checkImage_id = (req, res, next) => {
    const image_id = req.body.video_id;

    if (typeof image_id === "string") {
        next()
    } else {
        res.status(400).json({ error: "Image_id must be a String" })
    }
}

const checkCost = (req, res, next) => {
    const cost = req.body.cost;

    if (cost > 0) {
        next()
    } else {
        res.status(400).json({ error: "Cost must be an number" })
    }
}

module.exports = { checkName, checkBoolean, checkGenre, checkStoryline, checkVideo_id, checkImage_id, checkCost }
