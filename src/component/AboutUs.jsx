
import { useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardImages from "./CardImages";
import MenuAndLocationAndReservation from "./MenuAndLocation";
import Location from "./Location";
import Reservation from "./Reservation";
import 'aos/dist/aos.css';
import Aos from "aos";


const useStyles = makeStyles({
    TypoStyle: {
        color: "white",
        textAlign: "center",
        // fontFamily: 'Anton'
    },

});

function AboutUs() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const classes = useStyles()
    return (
        <Container sx={{ marginTop: "10rem" }}>
            <Box data-aos="fade-In">
                <Typography variant="p" component='p' className={classes.TypoStyle}>About Us</Typography>
                <Typography variant="h6" component="p" className={classes.TypoStyle}
                    sx={{
                        margin: "auto",
                        width: "35rem",
                        fontSize: "2vw",
                        textTransform: "uppercase",
                        wordSpacing: "1px",
                        marginTop: "2rem",
                        letterSpacing: "0px",
                        fontFamily: "Anton"


                    }} data-aos="zoom-out-up">
                    We are a New York's premier eggs specialty restaurant
                    founded by Jack Bloom. We have a dedicated menu showcasing
                    the versatility and deliciousness of eggs in all their forms,
                    from classic omelettes and egg sandwiches to more unique creations
                    like our egg and avocado toast or our smoked salmon and scrambled eggs</Typography>
                <Typography variant="p" component='p' className={`${classes.TypoStyle} ${classes.greaterParagraph}`}
                    sx={{
                        margin: "5rem auto",
                        width: "80vw",
                        wordSpacing: "1px",
                        fontSize: "1.5vw"
                    }} data-aos="zoom-in-up">Donec ac rutrum libero, vitae gravida leo. Quisque in nulla purus. Nulla scelerisque neque turpis, ac sagittis lorem volutpat a. Sed sed neque massa. Mauris blandit accumsan semper. Vestibulum consectetur congue nunc. Proin blandit mauris nibh, ut ornare turpis gravida vel.
                    Vivamus ac mi enim. Sed tincidunt quam ac risus egestas, ut ornare ex hendrerit</Typography>
            </Box>
            <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <MenuAndLocationAndReservation name='MENU' description='Taste the versatility and deliciousness of eggs in all their forms' />
                <Button variant="outlined"
                    sx={{
                        '&:hover': { backgroundColor: '#ffa001', borderColor: "white" },
                        color: "white",
                        width: "10rem",
                        padding: "0.75rem",
                        border: "1px solid white",
                        borderRadius: "20px",
                        marginTop: "2rem",
                        fontSize: "1rem"
                    }}>FULL MENU</Button>
            </Container>
            <CardImages />
            <Box>
                <MenuAndLocationAndReservation name='LOCATION' description='Where you can find us' />
            </Box>
            <Box>
                <Location />
            </Box>
            <Box>
                <MenuAndLocationAndReservation
                    name='RESERVATION'
                    description='Book your table online now' />
            </Box>
            <Box>
                <Reservation />
            </Box>
        </Container>
    )
}
export default AboutUs;


