import { db } from "../db.js";


export const getProduct = (_, res) => {
    const getQuery = "SELECT * FROM produtos";

    const connection = db();

    connection.query(getQuery, (err, data) => {
        if(err) {
            return res.status(500).json({error: err})
        }
            return res.status(200).json({data});
    }

)



}
