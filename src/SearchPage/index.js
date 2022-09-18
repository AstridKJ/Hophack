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
import { useEffect } from "react";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import AddIcon from '@mui/icons-material/Add';
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
    const [courses, setCourses] = useState({1: {name: "Mathematical Foundations", students: ['Astrid', 'Kiron', 'Mitra', 'William']}, 
    2: {name: "Probability and Statistics", students: ['John', 'Doe', 'Foo']},
    3: {name: "Biomedical Data Science", students: ['Test', 'TestName', 'Jack', 'Emily']},
    4: {name: "Biochemistry", students: ['Afa', 'Ged', 'Kevin', 'Emily']}});

    // const courses = {1: {name: "Mathematical Foundations", students: ['Astrid', 'Kiron', 'Mitra', 'William']}, 
    //                 2: {name: "Probability and Statistics", students: ['John', 'Doe', 'Foo']},
    //                 3: {name: "Biomedical Data Science", students: ['Test', 'TestName', 'Jack', 'Emily']},
    //                 4: {name: "Biochemistry", students: ['Afa', 'Ged', 'Kevin', 'Emily']}}
    const [courseEntered, setCourseEntered] = useState();
    const [allCourses, setAllCourses] = useState([]);
    const [open, setOpen] = useState(false);
    const [studentForModal, setStudentForModal] = useState();
    const handleOpen = (studentName) => {
        setStudentForModal(studentName)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const [current, setCurrent] = useState('');
    // function fetchCourses(event) {
    //     fetch("https://sis.jhu.edu/api/classes?key=rbEzDfQj3BN8orclCPPzilOe49UpGWVx&CourseTitle=" + event.target.value)
    //     .then((response) => response.json()).then((data) => {
    //         setAllCourses(data.map((courseInfo) => ({label: courseInfo.Title})))
    //     })
    // }

    useEffect(() => {
        fetch("https://sis.jhu.edu/api/classes?key=rbEzDfQj3BN8orclCPPzilOe49UpGWVx&Term=Fall%202010&School=Carey%20Business%20School")
        .then((response) => response.json()).then((data) => {
            setAllCourses([...new Set(data.map((courseInfo) => (courseInfo.Title)))])
        })
    }, [])

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
        const newCourses = courses;
        delete newCourses[id];
        setCourses({...newCourses});
    }

    function addCourse() {
        const newId = Date.now()
        setCourses({...courses, [newId]: {name: courseEntered, students: []}})
    }

    return (
        <div>
        <Grid container direction="row" style={{paddingLeft:'0px', height:'100vh'}}>
            <d  iv style={{marginLeft:'0px', paddingRight:'80px', paddingTop:'100px', backgroundColor:'#484848'}}>
            <Grid item container direction="column" spacing='60px' style={{  marginLeft: '10px',}} xs alignItems="center">
                <Grid item style={{width:'70%'}}>

                        <Stack direction="row" spacing={0}>
                        <Autocomplete
                        onChange={(event, value) => setCourseEntered(value)}
                        disablePortal
                        id="combo-box-demo"
                        options={allCourses}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} style={{width:'100%', borderColor:'#F6F051'}} label="Add a course"/>}
                        />
                        <IconButton style={{marginLeft: '10px'}} onClick={addCourse}>
                            <AddIcon/>
                        </IconButton>
                        </Stack>
                        
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
                                <Button startIcon={<DeleteIcon />} onClick={() => handleDeleteCourse(id)} />
                                </Grid>
                            </Grid>
                        )) 
                        : null}
                    </Stack>
                </Grid>
            </Grid>
            </d>

            
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
                            <Paper style={{width: '250px', border:'1px solid #0078BB'}}>
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
