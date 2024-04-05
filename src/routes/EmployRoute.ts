import * as express from 'express'
import {  getSingleData, getdata, postData} from '../controller/EmployController'
import Auth from '../utils/ValidateRoute'

const router = express.Router()

router.route('/library/').get(Auth, getdata).get(Auth, getSingleData).get(Auth, getSingleData)
router.route('/library/').post(postData)

export default router