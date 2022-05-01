import { useDispatch } from "react-redux";
import { ImitatorAction, imitatorActions } from "../config/imitator-config";
import { addCourse, ADD_COURSE_ACTION, removeCourse, updateCourse } from "../redux/actions";
import { getRandomCourse } from "./randomCourse";
import courseData from "../config/courseData.json"
import { getRandomElement, getRandomNumber } from "./random";
import { useEffect } from "react";
import Courses from "../components/pages/Courses";
import { Course } from "../models/Course";
import { click } from "@testing-library/user-event/dist/click";
import { getRundomCoursesID } from "./functions";
export function useImitator() {
    const dispatch = useDispatch();
    useEffect(() => {
        const intervalId = setInterval(action, 2000);
        
        return () => clearInterval(intervalId)
    }, [])
    
  
    function action() {
        const number = getRandomNumber(1,100);
        console.log(number)
        const imitatorAction: ImitatorAction = getAction(number);
        switch(imitatorAction.action) {
            case 'add': dispatchAdd(); break;
            case 'remove': dispatchRemove(); break;
            case 'update': dispatchUpdate(); break;
            default: break;
        }
    }
    function dispatchAdd() {
        dispatch(addCourse(getRandomCourse(courseData)));
    }
    function dispatchRemove() {
        dispatch(removeCourse(getRundomCoursesID()));
      
    }

    

    function dispatchUpdate() {
    //    dispatch(updateCourse(getRandomCourse(courseData)))
        
    }
}

function getAction(num: number): ImitatorAction {
   return imitatorActions.find(ia => num <= ia.prob) ?? imitatorActions[imitatorActions.length - 1]
}








