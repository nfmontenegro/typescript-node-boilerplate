import {Response, NextFunction} from 'express'

// async function ormConnection(req: any, res: Response, next: NextFunction) {
//   try {
//     const connection = await createConnection()
//     req.conn = connection
//     next()
//   } catch (err) {
//     res.status(500).json({message: err.message})
//   }
// }

// export {ormConnection}
