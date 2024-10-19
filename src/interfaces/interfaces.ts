import {Document,Schema} from "mongoose"

export interface ICourse extends Document{
    title : string
    instructor : string
    creditHour : number
    prerequisite? : Schema.Types.ObjectId
}