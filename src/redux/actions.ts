import { PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../models/Course";

export const ADD_COURSE_ACTION = "course/add";
export const REMOVE_COURSE_ACTION = "course/remove";
export const UPDATE_COURSE_ACTION = "course/update";
export function addCourse(course: Course): PayloadAction<Course> {
    return {payload: course, type: ADD_COURSE_ACTION};
}
export function removeCourse(id: number): PayloadAction<number> {
    return {payload: id, type: REMOVE_COURSE_ACTION};
}
export function updateCourse(course: Course): PayloadAction<Course> {
    return {payload: course, type: ADD_COURSE_ACTION};
}