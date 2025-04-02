const CollageService = require('../services/collageService');
const Collage = require('../models/collage');

class CollageController{
    constructor(){
        this.collageService = new CollageService();
    }
    async getCollages(req, res){
        try{
            const collages = await this.collageService.getCollages();
            res.status(200).json({
                'status': 'success',
                'message': 'Collages fetched successfully',
                'data': collages
            });
        }
        catch(error){
            res.status(500).json({
                'status': 'error',
                'message': error.message
            });
        }
    }
    async getCollageById(req, res){
        try{
            const collage = await this.collageService.getCollageById(req.params.id);
            if(!collage){
                return res.status(404).json({
                    'status': 'error',
                    'message': 'Collage not found'
                });
            }
            res.status(200).json({
                'status': 'success',
                'message': 'Collage fetched successfully',
                'data': collage
            });
        }
        catch(error){
            res.status(500).json({  
                'status': 'error',
                'message': error.message
            })
        }
    }

    async createCollage(req, res){
        try {
            // Create collage model instance with request data
            const collage = new Collage(
                req.body.collage_name,
                req.body.collage_address,
                req.body.collage_tier,
                req.body.collage_affiliation,
                req.body.collage_phone
            );

            // Validate the collage data
            collage.validate();

            // Create collage in database using service
            const createdCollage = await this.collageService.createCollage(
                collage.collage_name,
                collage.collage_address,
                collage.collage_tier,
                collage.collage_affiliation,
                collage.collage_phone
            );

            res.status(201).json({
                'status': 'success',
                'message': 'Collage created successfully',
                'data': createdCollage
            });
        }
        catch (error) {
            // Handle validation errors with 400 status
            if (error.message.includes('must be') || error.message.includes('required')) {
                return res.status(400).json({
                    'status': 'error',
                    'message': error.message
                });
            }
            // Handle other errors with 500 status
            res.status(500).json({
                'status': 'error',
                'message': error.message
            });
        }
    }
    async updateCollage(req, res){
        try{
            
        }
    }
}