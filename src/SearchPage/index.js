import { TextField , Grid, Typography, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import List from '@mui/material/List';

function SearchPage() {
    // const [courses, setCourses] = useState();
    // const [studentList, setStudentList] = usetState();
    const courses = [{id: 1, name: "course 1"}, {id: 2, name: "course 2"}, {id: 3, name: "course 3"}]
    const studentList = [{courseName: 'Course 1', students: ['Astrid', 'Kiron', 'Mitra', 'William']},
    {courseName: 'Course 2', students: ['John', 'Doe', 'Foo', 'Bar']}]

    // Find courses as user types in the TextField
    function handleTextChange(event) {
        console.log(event.target.value);
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
                        label="Search"
                        onChange={handleTextChange}
                        />
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
