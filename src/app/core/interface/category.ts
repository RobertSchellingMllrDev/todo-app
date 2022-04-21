import { Task } from "./task"

export interface Category {
    name: string,
    isFinished: boolean,
    tasks: Task[]
}