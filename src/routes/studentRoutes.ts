import * as express from 'express';
import {deleteData, getSingleData, getdata, postData, updateData} from '../controller/studentController'

const router = express.Router();

    // #swagger.tags = ["student"]
    // @Api(tags='student')

router.route('/student/').get(getdata).post(postData); 

router.route('/student/:id').get(getSingleData).delete(deleteData).patch(updateData)



export default router;