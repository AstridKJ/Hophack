import { TextField , Grid, Typography, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import CustomModal from "../CustomModal";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

function SearchPage() {
    // const [courses, setCourses] = useState();
    const courses = {1: {name: "Mathematical Foundations", students: ['Astrid', 'Kiron', 'Mitra', 'William']}, 
                    2: {name: "Probability and Statistics", students: ['John', 'Doe', 'Foo', 'Bar']},
                    3: {name: "Biomedical Data Science", students: ['Test', 'TestName', 'Jack', 'Emily']},
                    4: {name: "Biochemistry", students: ['Afa', 'Ged', 'Kevin', 'Emily']}}
    const [open, setOpen] = useState(false);
    const [studentForModal, setStudentForModal] = useState();
    const handleOpen = (studentName) => {
        setStudentForModal(studentName)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

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
        console.log(id);
    }

    function handleDeleteCourse(id) {
        console.log(id);
        // const newCourses = courses;
        // delete newCourses[id];
        // setCourses(newCourses);
    }

    return (
        <div>
        <Grid container direction="row" style={{height:'200vh'}}>
            <div style={{marginRight:'30px', paddingRight:'70px', paddingTop:'100px', backgroundColor:'#484848'}}>
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
                        (Object.keys(courses).map((id) => 
                            <Grid container>
                                <Grid item xs={10}> 
                                    <Button id={id} variant="contained" fullWidth style={{ textTransform: 'capitalize', color:'#484848', backgroundColor: '#F6F051'}}
                                    onClick={(event) => handleShowStudents(event.target.id)}> 
                                        <Typography> {courses[id].name} </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={2} margin="auto">
                                <Button startIcon={<DeleteIcon />} onClick={() => handleDeleteCourse(id)} style={{color: '#13a0ec'}}/>
                                </Grid>
                            </Grid>
                        )) 
                        : null}
                    </Stack>
                </Grid>
            </Grid>
            </div>

            
            {Object.keys(courses).map((id) => 
            <Grid container item xs style={{paddingTop:'80px'}}>
                <Grid item xs>  
                    <Typography variant="h4" align="center" style={{paddingBottom:'40px', height: '80px'}}>
                        {courses[id].name}
                    </Typography>
                    <Stack direction="column" spacing={2} alignItems="center"> 
                        {courses[id].students ? 
                        courses[id].students.map((studentName) => 
                        <IconButton style={{borderRadius:'5px', padding: '0px'}} onClick={() => handleOpen(studentName)}>
                            <Paper style={{width: '200px', border:'1px solid #0078BB'}}>
                                {studentName}
                            </Paper>
                        </IconButton>
                        )
                        : null}
                    </Stack>
                </Grid>
                <CustomModal open={open} handleClose={handleClose} student={studentForModal}/>
            </Grid>
            )}

        </Grid>
        </div>
  );
}

export default SearchPage;
