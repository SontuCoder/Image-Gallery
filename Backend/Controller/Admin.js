import Admin from '../models/Admin.js';
export const admin = async (req, res) => {
    try{
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(400).json({
                success: false, 
                message: 'Please provide name and password'
            });
        }
        const adminData = await Admin.findOne({ name });
        if(!adminData){
            return res.status(404).send({success: false, message: 'Admin not found'});
        } else {
            if(adminData.password === password){
                return res.status(200).send({success: true, message: 'Admin logged in successfully'});
            } else {
                return res.status(401).send({success: false, message: 'Incorrect password'});
            }
        } 
    } catch (error) {
        return res.status(500).send({success: false, message: 'Server error'});
    }
};

