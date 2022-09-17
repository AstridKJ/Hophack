import { TextField , Grid, Typography, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
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
    const courses = {1: {name: "Course 1", students: ['Astrid', 'Kiron', 'Mitra', 'William']}, 
                    2: {name: "Course 2", students: ['John', 'Doe', 'Foo', 'Bar']}}
    const [open, setOpen] = useState(false);
    const [studentForModal, setStudentForModal] = useState();
    const handleOpen = (studentName) => {
        setStudentForModal(studentName)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    

    // Find courses as user types in the TextField
    function handleTextChange(event) {
        console.log(event.target.value);
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
        <ThemeProvider theme={theme}>
        <Grid container direction="row" style={{  marginTop: '40px' }}>
            <Grid item container direction="column" spacing='10px' style={{  marginLeft: '10px' }} xs>
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
                        (Object.keys(courses).map((id) => 
                            <Grid container>
                                <Grid item xs={6}> 
                                    <Button id={id} variant="contained" fullWidth style={{ textTransform: 'capitalize'}}
                                    onClick={(event) => handleShowStudents(event.target.id)}> 
                                        <Typography> {courses[id].name} </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={6} margin="auto">
                                <Button startIcon={<DeleteIcon />} onClick={() => handleDeleteCourse(id)} />
                                </Grid>
                            </Grid>
                        )) 
                        : null}
                    </Stack>
                </Grid>
            </Grid>

            {Object.keys(courses).map((id) => 
            <Grid container item xs spacing='10px'>
                <Grid item xs>
                    <Typography variant="h4" align="center">
                        {courses[id].name}
                    </Typography>
                    <Stack direction="column" spacing={2} alignItems="center" marginTop='10px'> 
                        {courses[id].students ? 
                        courses[id].students.map((studentName) => 
                        <IconButton onClick={() => handleOpen(studentName)} style={{padding: '0px'}}>
                            <Paper style={{width: '250px'}}>
                            <Typography align="center"> {studentName} </Typography>
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
        </ThemeProvider>
        </div>
  );
}

export default SearchPage;
