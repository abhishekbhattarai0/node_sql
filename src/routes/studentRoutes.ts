import * as express from 'express';
import {deleteData, getSingleData, getdata, postData, updateData} from '../controller/studentController'
import { upload } from '../utils/UploadFiles';

const router = express.Router();

    // #swagger.tags = ["student"]
    // @Api(tags='student')

router.route('/student/').get(getdata).post(upload.single("profile"), postData); 
// router.route('/student/').get(getdata).post(upload.fields([
//     {
//         name:"profile"
//     },
//     {
//         name: "coverImage"
//     }   

// ]),postData); 

router.route('/student/:id').get(getSingleData).delete(deleteData).patch(updateData)



export default router;