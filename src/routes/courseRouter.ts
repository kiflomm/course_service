import {Router} from "express"
import {
    getAllCourses,
    createCourse
} from "../controllers/courseController"

const courseRouter = Router()
courseRouter.get("/all",getAllCourses)
courseRouter.post("/add",createCourse)
export default courseRouter