import {model,Schema} from "mongoose"
import {ICourse} from "../interfaces/interfaces"

const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    creditHour: {
        type: Number,
        required : true
    },
    prerequisite: {
        type: Schema.Types.ObjectId,
        ref: 'Course', 
        default: null 
    }
},{
    timestamps:true
})

const courseModel = model<ICourse>('Course',courseSchema)

export default courseModel