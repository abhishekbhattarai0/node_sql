import {Request, Response, NextFunction} from 'express';
import { AppDataSource } from '../data-source';
import { student } from '../entity/student';
import { AppError } from '../utils/AppError';

const StudentRepo = AppDataSource.getRepository(student)


export const getdata = async (req: Request ,res: Response, next: NextFunction ) => {
    try {
        await StudentRepo.findOneBy({id:req.params.id}).then( result => {

            res.status(200).json({
                message: " Student data has been fetched successfully",
                data: result
            })
        }).catch(error => {

            next(new AppError(400, error.message))

            // res.status(400 ).json({
            //     message: "Something went wrong while fetching data",
            //     error: error.message
            // })
        })
    } catch (error) {
        next(new AppError(400, error.message))

        // res.status(500).json({
        //     message:"Something went wrong",
        //     error: error
        // })
    }
}

export const postData = async (req: Request ,res: Response, next: NextFunction ) => {
    try {
        console.log(req.body)
        await StudentRepo.save(req.body).then( result => {
            res.status(200).json({
                message: " Student data has been fetched successfully",
                data: result
            })

        }).catch(error => {
            res.status(400 ).json({
                message: "Something went wrong while fetching data",
                error: error.message
            })
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            error: error
        })
    }
}

export const getSingleData = async (req: Request ,res: Response, next: NextFunction ) => {
    try {
        console.log(req.body)
        console.log(req.params)
        await StudentRepo.save(req.body).then( result => {
            res.status(200).json({
                message: " Student data has been fetched successfully",
                data: result
            })

        }).catch(error => {
            next(new AppError(400, error.message))

            // res.status(400 ).json({
            //     message: "Something went wrong while fetching data",
            //     error: error.message
            // })
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            error: error
        })
    }
}



