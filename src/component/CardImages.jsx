

import { useEffect } from 'react';
import { Grid, Box, Container } from "@mui/material";
import images from '../images';
import 'aos/dist/aos.css';
import Aos from 'aos';

function CardImages() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ marginTop: "7rem", marginBottom: "7rem" }}>
            <Grid container >
                {images.map((image, index) => (
                    <Grid key={index} item xs={12} md={12} lg={3}>
                        <Box component="div" sx={{
                            overflow: "hidden",
                            backgroundColor: "#c9a998",
                            "&:hover": {
                                backgroundColor: "#d7b6a4"
                            },
                            color: "white",
                            fontSize: "25px",
                            textAlign: "center",
                            border: "1px solid #a3897b",
                        }} data-aos="fade-up">
                            <img src={image.image} width={"100%"} alt={image.name} />
                            <p style={{ fontWeight: "bolder", marginTop: "20px", fontSize: "17px", }}>{image.price}</p>
                            <p style={{ fontFamily: 'Anton' }}>{image.name}</p>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CardImages;
