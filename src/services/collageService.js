const db = require("../database/db");
class CollageService{
    async getCollages(){
        const result = await db.query('SELECT * FROM collage');
        return result.rows;
    }
    async getCollageById(id){
        const result = await db.query('SELECT * FROM collage WHERE id = $1', [id]);
        return result.rows[0];
    }
    async createCollage(collage_name, collage_address, collage_tier, collage_affiliation, collage_phone){
        const result = await db.query(
            'INSERT INTO collages (collage_name,collage_address, collage_tier, collage_affiliation, collage_phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [collage_name, collage_address, collage_tier, collage_affiliation, collage_phone]
        );
        return result.rows[0];
    }
    async updateCollage(collage_name, collage_address, collage_tier, collage_affiliation, collage_phone){
        const result = await db.query(
            'UPDATE collages SET collage_name = $1, collage_address = $2, collage_tier = $3, collage_affiliation = $4, collage_phone = $5 WHERE id = $6 RETURNING *',
            [collage_name, collage_address, collage_tier, collage_affiliation, collage_phone, id]
        );
        return result.rows[0];
    }
    async deleteCollage(id){
        const result = await db.query('DELETE FROM collages WHERE id = $1 RETURNING *', [id]);
        return result.rowCount > 0;
    }
}

module.exports = CollageService;
