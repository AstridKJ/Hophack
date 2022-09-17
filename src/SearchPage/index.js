import { TextField , Grid, Typography, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";

function SearchPage() {
    // const [courses, setCourses] = useState();
    // const [studentList, setStudentList] = usetState();
    const courses = [{id: 0, name: "Hello"}, {id: 1, name: "Mathematical Foundations"}, {id: 2, name: "Probability and Statistics"}, {id: 3, name: "Biomedical Data Science"},  {id: 4, name: "Biochemistry"}]
    const studentList = [{courseName: 'Course 1', students: ['Astrid', 'Kiron', 'Mitra', 'William']},
    {courseName: 'Course 2', students: ['John', 'Doe', 'Foo', 'Bar']}]
    const [current, setCurrent] = useState('');

    // returns a list of course names given a list of courses and a partial value
    function findPartialCourseName(courseList, value) {
        value = value.toLowerCase()
        let list = []
        let j = value.length
        for (let i = 0; i < courses.length; i++) {
            let n = courses[i].name
            if (n.toLowerCase().substring(0, j) === value) {
                list.push(n);
            }
        }
        return list
    }

    // Find courses as user types in the TextField
    function handleTextChange(event) {
        if (event.target.value) {
            console.log(findPartialCourseName(courses, event.target.value))
            setCurrent(findPartialCourseName(courses, event.target.value))
        } else {
            setCurrent([])
        }
    }

    // Show students for course with the given id
    function handleShowStudents(id) {
        console.log(id)
    }

    return (
        <div>
        <Grid container direction="row" style={{  marginTop: '40px' }}>
            <Grid item container direction="column" spacing='60px' style={{  marginLeft: '10px' }} xs>
                <Grid item>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Class name"
                        onChange={handleTextChange}
                        />
                        <ul>
                        {current && current.map((course) => (
                            <li>{course}</li>
                        ))}
                        </ul>
                    </Grid>
                <Grid item>
                    <Stack direction="column" spacing={2}>
                        {courses ? 
                        (courses.map(({id, name}) => 
                            <Button id={id} variant="contained" style={{width: "250px", textTransform: 'capitalize'}}
                            onClick={(event) => handleShowStudents(event.target.id)}> 
                                {name} 
                            </Button>
                        )) 
                        : null}
                    </Stack>
                </Grid>
            </Grid>

            {studentList.map((courseInfo) => 
            <Grid container item xs >
                <Grid item xs>
                    <Typography variant="h4" align="center">
                        {courseInfo.courseName}
                    </Typography>
                    <Stack direction="column" spacing={2} alignItems="center"> 
                        {courseInfo.students ? 
                        courseInfo.students.map((studentName) => 
                        <IconButton >
                            <Paper style={{width: '250px'}}>
                                {studentName}
                            </Paper>
                        </IconButton>
                        )
                        : null}
                    </Stack>
                </Grid>
            </Grid>
            )}

        </Grid>
        </div>
  );
}

export default SearchPage;
