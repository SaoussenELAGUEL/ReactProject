var express = require('express');
var router = express.Router();
const Scategorie=require("../models/scategorie");
const Categorie=require("../models/categorie");
// afficher la liste des sous categories.
router.get('/', async (req, res, )=> {
    try {
        const scat = await Scategorie.find().populate("categorieID").exec();
        res.status(200).json(scat);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        
});
// créer un nouvelle sous catégorie
router.post('/', async (req, res) => {
    const { nomscategorie, imagescat, categorieID} = req.body;
    const newScategorie = new Scategorie({ nomscategorie: nomscategorie, 
        imagescat:imagescat, categorieID:categorieID})
    try {
    await newScategorie.save();
    res.status(200).json(newScategorie );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
    
    // chercher une sous catégorie 
router.get('/:scategorieID',async(req, res)=>{
    try {
        const scat = await Scategorie.findById(req.params.scategorieID);
        res.status(200).json(scat);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }        

});
// modifier une catégorie
router.put('/:scategorieId', async (req, res)=> {
    const { nomscategorie, imagescat,categorieID} = req.body;
const id = req.params.scategorieId;
try {
const scat1 = { 
    nomscategorie:nomscategorie,imagescat:imagescat,categorieID:categorieID, _id:id };
await Scategorie.findByIdAndUpdate(id, scat1);
res.json(scat1);
} catch (error) {
res.status(404).json({ message: error.message });
}

});
// Supprimer une sous catégorie
router.delete('/:scategorieId', async (req, res)=> {
    try {const id = req.params.scategorieId;
    await Scategorie.findByIdAndDelete(id);
    10
    res.json({ message: "scategorie deleted successfully." });
} catch (error) {
    res.status(404).json({ message: error.message });
    }     
});



module.exports = router;
