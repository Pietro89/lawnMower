import {Request} from "express";

interface File {
    fieldname: string
    buffer: Buffer
}

export const fileFromRequest = (fileName: string, req: Request): string | null => {
    if (!req.files) {
        return null
    }
    const files = req.files as File[]
    const file = files.find((file: File) => file.fieldname === fileName)
    if (!file) {
        return null
    }
    return file.buffer.toString('utf8')
}
