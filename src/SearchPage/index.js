import { TextField , Grid, Typography, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import '../App.css';

function SearchPage() {
    // const [courses, setCourses] = useState();
    // const [studentList, setStudentList] = usetState();
    const courses = [{id: 1, name: "Mathematical Foundations"}, {id: 2, name: "Probability and Statistics"}, {id: 3, name: "Biomedical Data Science"},  {id: 4, name: "Biochemistry"}]
    const studentList = [{courseName: 'Course 1', students: ['Astrid', 'Kiron', 'Mitra', 'William']},
    {courseName: 'Course 2', students: ['John', 'Doe', 'Foo', 'Bar']}]
    const [current, setCurrent] = useState('');

    // function parseClassesArray(url) {

    // }

    // function handleAPIHelper(url) {
    //     return fetch(url)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       return parseAPI(responseJson);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //  }

    // function handleAPI() {
    //     let url = "https://sis.jhu.edu/api/classes/Whiting%20School%20of%20Engineering/current?key=PujT3qlFrppEUi1vRT0z9XqQShqEFOWd"
    //     setCourses(getClasses(url))
    // }

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
        // handleAPI()
        if (event.target.value && courses) {
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
        <Grid container direction="row" style={{paddingLeft:'0px', height:'100vh'}}>
            <div style={{marginLeft:'0px', paddingRight:'80px', paddingTop:'100px', backgroundColor:'#484848'}}>
            <Grid item container direction="column" spacing='60px' style={{  marginLeft: '10px',}} xs>
                <Grid item style={{width:'100%'}}>
                    <TextField
                        style={{width:'100%', borderColor:'#F6F051'}}
                        id="outlined-basic"
                        variant="outlined"
                        label="Class name"
                        onChange={handleTextChange}
                        />
                        <div style={{marginTop:'0px', marginLeft:'0px'}}>
                        {current && current.map((course) => (
                            <Button variant="contained" class="popup" style={{borderTop:'none'}}>{course}</Button>
                        ))}
                        </div>
                    </Grid>
                <Grid item>
                    <Stack direction="column" spacing={2}>
                        {courses ? 
                        (courses.map(({id, name}) => 
                            <Button id={id} variant="contained" style={{width: "250px", textTransform: 'capitalize', color:'#484848', backgroundColor: '#F6F051'}}
                            onClick={(event) => handleShowStudents(event.target.id)}> 
                                {name} 
                            </Button>
                        )) 
                        : null}
                    </Stack>
                </Grid>
            </Grid>
            </div>

            
            {studentList.map((courseInfo) => 
            <Grid container item xs style={{paddingTop:'80px'}}>
                <Grid item xs>
                    {/* <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                        </CardContent>
                    </Card> */}
                    <Typography variant="h4" align="center" style={{paddingBottom:'40px'}}>
                        {courseInfo.courseName}
                    </Typography>
                    <Stack direction="column" spacing={2} alignItems="center"> 
                        {courseInfo.students ? 
                        courseInfo.students.map((studentName) => 
                        <IconButton style={{borderRadius:'5px'}}>
                            <Paper style={{width: '250px', border:'1px solid #0078BB'}}>
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
