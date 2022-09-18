import { TextField , Grid, Typography, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import CustomModal from "../CustomModal";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { useEffect } from "react";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import AddIcon from '@mui/icons-material/Add';
import FormModal from "../FormModal";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

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

    const [formOpen, setFormOpen] = useState(false);
    const formClose = () => setFormOpen(false);
    const formShow = () => setFormOpen(true);

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
        if (courseEntered) {
            setCourses({...courses, [newId]: {name: courseEntered, students: []}})
        }
    }
    
    function handleFormPopup(id) {
        setFormOpen(true)
    }

    return (
        <div>
        <Grid container direction="row" style={{height:'60vh'}}>
            <div style={{marginLeft:'-40px', paddingRight:'40px', paddingTop:'80px', paddingBottom:'60px', marginRight:'30px', backgroundColor:'#484848', borderRadius:'0px 0px 15px 0px'}}>
            <Grid item container direction="column" spacing='60px' style={{  marginLeft: '10px',}} xs alignItems="center">
                <Grid item style={{width:'70%'}}>

                        <Stack direction="row" spacing={0}>
                        <Autocomplete
                        onChange={(event, value) => setCourseEntered(value)}
                        disablePortal
                        id="combo-box-demo"
                        options={allCourses}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} style={{width:'100%', borderColor:'#F6F051', backgroundColor:'white', borderRadius:'5px'}} label="Add a course"/>}
                        />
                        <IconButton style={{marginLeft: '10px'}} onClick={addCourse}>
                            <AddIcon/>
                        </IconButton>
                        </Stack>
                        
                </Grid>
                <Grid item>
                    <Stack direction="column" spacing={3}>
                        {courses ? 
                        (Object.keys(courses).map((id) => 
                            <Grid container>
                                <Grid item xs={9}> 
                                    <Button id={id} variant="contained" fullWidth style={{ textTransform: 'capitalize', color:'#484848', backgroundColor: '#F6F051'}}
                                    onClick={(event) => handleShowStudents(event.target.id)}> 
                                        <Typography style={{padding: '5px 0px'}}> {courses[id].name} </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={1} margin="auto">
                                <Button startIcon={<AddBoxIcon style={{fontSize:'25px'}} />} onClick={() => handleFormPopup(id)} style={{color:'white'}}/>
                                </Grid>
                                <Grid item xs={1} margin="auto">
                                <Button startIcon={<DeleteIcon style={{fontSize:'25px'}} />} onClick={() => handleDeleteCourse(id)} style={{color: '#13a0ec'}}/>
                                </Grid>
                            </Grid>
                        )) 
                        : null}
                    </Stack>
                </Grid>
                <FormModal formOpen={formOpen} formClose={formClose}/>
            </Grid>
            </div>
            
            {Object.keys(courses).map((id) => 
            <Grid xs="2" style={{paddingTop:'80px'}}>
                <Grid item xs>  
                    <Typography variant="h4" align="center" style={{marginBottom:'30px', height: '80px', fontSize: '33px'}}>
                        {courses[id].name}
                    </Typography>
                    <Stack direction="column" spacing={2} alignItems="center"> 
                        {courses[id].students ? 
                        courses[id].students.map((studentName) => 
                        <IconButton style={{borderRadius:'5px', padding: '0px'}} onClick={() => handleOpen(studentName)}>
                            <Paper style={{width: '200px', padding: '20px 0px', border:'1px solid #0078BB'}}>
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
