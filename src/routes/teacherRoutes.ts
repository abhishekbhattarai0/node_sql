import * as express from 'express';
import { getdata, postData, getSingleData, deleteData, updateData } from '../controller/TeacherControllers';
// import { upload } from '../utils/UploadFiles';
const router = express.Router();

    // #swagger.tags = ["teacher"]
    // @Api(tags='teacher')

router.route('/teacher/').get(getdata).post(postData); 

router.route('/teacher/:id').get(getSingleData).delete(deleteData).patch(updateData)



export default router;