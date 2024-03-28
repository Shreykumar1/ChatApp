
const url = `http://localhost:3000`

const uploadFile = async (req,res) => {
    try {
        if(!req.file){
            return res.status(404).json('File not found');
        }
        console.log("Kee haal chal");
        const imageUrl = `${url}/file/${req.file.filename}`
       return res.status(200).json(imageUrl);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {uploadFile}