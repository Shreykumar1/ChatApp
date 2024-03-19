


const addUser = async (req,res) => {
    const data =  req.body;
    console.log(data);
    res.send({data});

    console.log("ADDUSER");

}


module.exports = {addUser}