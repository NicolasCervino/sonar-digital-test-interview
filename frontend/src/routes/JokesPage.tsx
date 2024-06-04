import { useEffect, useState } from "react";
import { getRandomJoke } from "../service/Api";
import { Box, Typography } from "@mui/material";


function JokesPage() {
    const [joke, setJoke] = useState<string>("");

    useEffect(() => {
        getRandomJoke()
            .then((data) => {
                setJoke(data.value);
            });
    }, []);

    return (
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
                Data from API:
            </Typography>
            <Typography variant="body1"> {joke}</Typography>
        </Box>
    );
}

export default JokesPage;