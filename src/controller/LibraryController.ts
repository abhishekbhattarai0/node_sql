import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Library } from "../entity/Library";
import { AppError } from "../utils/AppError";


const LibraryRepo = AppDataSource.getRepository(Library)

export const getLibraryData = async(  req: Request,res: Response, next: NextFunction) => {
    // #swagger.tags=['Library]
    try {
        console.log("here")
        LibraryRepo.find().then((response) => {
            res.status(200).json({
                message: "Books info has successfully fetchd",
                data: response
            })
        }).then( (error) => {
            next( new AppError(400, "Something went wrong"))
        })
    } catch (error) {
        next( new AppError(400, error.message))
    }
}

export const postLibraryData = async( req: Request, res: Response, next: NextFunction) => {
    try {
        LibraryRepo.save(req.body).then( (data) => {
            res.status(200).json({
                message: "Data has been saved successfully",
                data: data
            })
        }).catch( (error) => {
            next( new AppError( 400, error.message))
        })
    } catch (error) {
        next(new AppError( 400, error.message))
    }
}

export const getSingleData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        LibraryRepo.findOneBy({id: req.params.id}).then( (data) => {
            res.status(200).json({
                message: "User data",
                data: data
            })
        }).catch( (error)=> {
            next(new AppError(400, error.message))
        })
    } catch (error) {
        next(new AppError(400, error.message))
    }
}

export const updateLibraryData = async ( req: Request, res: Response, next: NextFunction) => {
    try{
        const data = await LibraryRepo.findOneBy({id: req.params.id})

        if(!data){
            next( new AppError(400, "Something went wrong while updating"))
        }

        Object.assign(data, req.body)
        await LibraryRepo.save(data).then( (result) => {
            res.status(200).json({
                message: "Library data has been updated",
                data: result
            })
            }).catch( (error)=> {
                next(new AppError(400, error.message))
            }) 
    }catch(error){
        next(new AppError(400, error.message))
    }
}

