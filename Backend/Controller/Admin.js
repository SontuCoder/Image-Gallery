import Admin from '../models/Admin.js';
export const admin = async (req, res) => {
    try{
        const { name, password } = req.body;
        const admin = await Admin.find({ name });
        console.log(admin);
        if(!admin){
            return res.status(404).send({success: false, message: 'Admin not found'});
        } else {
            if(admin.password === password){
                return res.status(200).send({success: true, message: 'Admin logged in successfully'});
            } else {
                return res.status(400).send({success: false, message: 'Incorrect password'});
            }
        } 
    } catch (error) {
        return res.status(500).send({success: false, message: 'Server error'});
    }
};

