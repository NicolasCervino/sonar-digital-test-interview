import { AppBar, Button, Toolbar, } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'center', gap: "sm" }}>
                <Button component={Link} to="/" color="inherit">Jokes</Button>
                <Button component={Link} to="/form" color="inherit">Form</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;