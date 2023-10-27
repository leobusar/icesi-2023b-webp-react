import React, { useEffect, useState } from 'react'
import axios from '../config/axios'

function Courses() {
 const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get("/courses")
        .then(res => {
            //if(res.status===200)
                setCourses(res.data)
                console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
  }, [])

  const listCourses = () =>   courses.map(course => (
        <li key={course.course_name}>
                {course.course_name+" -- "+course.course_name_eng}
            </li>
  ))
  
  
  return (
    <ul>{listCourses()}</ul>
  )
}


export default Courses
