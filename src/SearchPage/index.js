import { TextField , Grid } from "@mui/material";


function SearchPage() {
    // find courses as user types in the TextField
    function handleTextChange(event) {
        console.log(event.target.value);
    }
    return (
        <div>
        <Grid container direction="column" style={{ marginLeft: '40px', marginTop: '40px' }}>
            <Grid item>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Search"
                    onChange={handleTextChange}
                    />
                </Grid>
            <Grid item>
                    test
                </Grid>

            </Grid>

        </div>
  );
}

export default SearchPage;
