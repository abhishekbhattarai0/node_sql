import * as express from 'express'
import { getLibraryData, postLibraryData , getSingleData} from '../controller/LibraryController'
import Auth from '../utils/ValidateRoute'

const router = express.Router()

router.route('/library/').get(Auth, getLibraryData).get(Auth, getLibraryData).get(Auth, getSingleData)
router.route('/library/').post(postLibraryData).post(postLibraryData)

export default router