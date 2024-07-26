
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";

function MenuAndLocationAndReservation(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <Divider orientation="vertical" sx={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "white",
                borderBottomWidth: "0px",
                borderRightWidth: "thin",
                margin: "auto",
                marginTop: "3vw",
                height: "7rem",
                fontSize: "0",
                width: "0rem",
                fontWeight: "700",
            }} data-aos="fade-up" />
            <Container data-aos="fade-up">
                <Grid sx={{ color: "white", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <Grid sx={{ fontSize: "5rem", fontFamily: 'Anton', marginBottom: "0.5rem", letterSpacing: "0px" }}>{props.name}</Grid>
                    <Grid sx={{ fontSize: "1.5rem" }}>{props.description}</Grid>
                </Grid>
            </Container >
        </>
    )
}

export default MenuAndLocationAndReservation
