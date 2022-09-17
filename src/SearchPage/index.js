import { TextField , Grid } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
function SearchPage() {
    // const [courses, setCourses] = useState();
    // const courses = [(1, "course 1"), (2, "course 2"), (3, "course 3")]
    const courses = [{id: 1, name: "course 1"}, {id: 2, name: "course 2"}, {id: 3, name: "course 3"}]

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
        <Grid container direction="column" spacing='60px' style={{ marginLeft: '40px', marginTop: '40px' }}>
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
                        <Button id={id} variant="contained" style={{width: "300px", textTransform: 'capitalize'}}
                        onClick={(event) => handleShowStudents(event.target.id)}> 
                            {name} 
                        </Button>
                    )) 
                    : null}
                </Stack>
            </Grid>

            </Grid>

        </div>
  );
}

export default SearchPage;
