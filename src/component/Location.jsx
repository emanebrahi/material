import { Box, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import ContactSection from "./ContactSection";
import Aos from 'aos';
import { useEffect } from "react";


const dataOne = [
    { name: "CONTACT" },
    { name: "PHONE", description: "(555) 555-1234" },
    { name: "ADDRESS", description: "13 FIFTH  AVENUE, NEW YORK" }]
const dataTwo = [
    { name: "OPENING HOURS" },
    { name: "Monday-Friday", description: "9:00 AM - 10:00 PM" },
    { name: "Saturday", description: "9:00 AM - 18:00 PM" },
    { name: "Sunday", description: "Closed" }
]

function Location() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <Container maxWidth="xl" data-aos="fade-right" sx={{ marginTop: "7rem", marginBottom: "7rem" }}>
                <Grid container spacing={2} alignItems="stretch" >
                    <Grid item xs={12} md={6} lg={6} >
                        <Box >
                            {dataOne.map((data) => {
                                return (

                                    <ContactSection text={data.name} description={data.description} />

                                )
                            })}

                        </Box>
                        <Divider aria-hidden="true" orientation="horziontal" sx={{
                            borderColor: "white",
                            borderBottomWidth: "thin",
                            width: "3rem",
                            marginTop: "2rem",
                        }} />
                        <Box>
                            {dataTwo.map((data) => {

                                return (
                                    <ContactSection
                                        text={data.name}
                                        description={data.description}

                                    />
                                )
                            })}
                        </Box>

                    </Grid>


                    <Grid item xs={12} md={6} lg={6}>
                        <Box height="100%">
                            <form noValidate autoComplete="off">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d636581.2472194618!2d0.253329!3d51.446304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1707399101926!5m2!1sen!2sus"
                                    width="100%"
                                    height="450"
                                    style={{ border: "0" }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </form>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Location;

