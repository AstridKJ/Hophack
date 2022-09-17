import { TextField , Grid, Typography, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import CustomModal from "../CustomModal";

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
                        (Object.keys(courses).map((id) => 
                            <Grid container>
                                <Grid item xs={9}> 
                                    <Button id={id} variant="contained" style={{width: "250px", textTransform: 'capitalize'}}
                                    onClick={(event) => handleShowStudents(event.target.id)}> 
                                        {courses[id].name} 
                                    </Button>
                                </Grid>
                                <Grid item xs={3} margin="auto">
                                    <DeleteIcon onClick={() => handleDeleteCourse(id)}/>
                                </Grid>
                            </Grid>
                        )) 
                        : null}
                    </Stack>
                </Grid>
            </Grid>

            {Object.keys(courses).map((id) => 
            <Grid container item xs >
                <Grid item xs>
                    <Typography variant="h4" align="center">
                        {courses[id].courseName}
                    </Typography>
                    <Stack direction="column" spacing={2} alignItems="center"> 
                        {courses[id].students ? 
                        courses[id].students.map((studentName) => 
                        <IconButton onClick={() => handleOpen(studentName)}>
                            <Paper style={{width: '250px'}}>
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
