import * as express from 'express';
import {getSingleData, getdata, postData} from '../controller/studentController'

const router = express.Router();
router.route('/').get(getdata).post(postData);

router.route('/:id').get(getSingleData)


export default router;