import { useState } from "react";
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Aos from 'aos';
import { useEffect } from "react";

   
function Reservation() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Adjust duration as needed
}, []);
  const data = [{ name: "NAME" }, { name: "PHONE" }, { name: "NUMBER OF PERSONS" }]
  const dataReservation = data.map((data) => {
    return (
      <TextField
        key={data.name}
        id="standard-basic"
        placeholder={data.name}
        variant="standard"
        sx={{
          width: "50%",
          margin: "1rem",
          color: "white",
          '& input': {
            color: 'white' // For the input text color
          },
          "&:hover": {
            borderBottom: "1px solid gray"
          }
        }}
      />
    )
  })

  const [hours, setHours] = useState('');
  const [days, setDays] = useState('')

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };
  const handleDayssChange = (event) => {
    setDays(event.target.value)
  }
  const daysData = [
    { value: "Saturday", label: "Saturday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ]
  const HoursData = [
    { value: "10 AM", label: "10 AM" },
    { value: "11 AM", label: "11 AM" },
    { value: "12 AM", label: "12 AM" },
    { value: "1 PM", label: "1 PM" },
    { value: "2 PM", label: "2 PM" },
    { value: "3 PM", label: "3 PM" },
  ]

  return (
    <Container maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      
      
      }}>
      {dataReservation}
      <FormControl data-aos="fade-up" variant="standard" sx={{ width: "50%" }}>
        <Select
          value={days}
          onChange={handleDayssChange}
          displayEmpty
          placeholder="RESERVATION DAY"
          sx={{ color: 'white'}} 
        >
          <MenuItem value="">DAYS</MenuItem>
          {daysData.map((data) => (
            <MenuItem key={data.value} value={data.value}>
              {data.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl data-aos="fade-up" variant="standard" sx={{ width: "50%", margin: "1rem" }}>
        <Select
          value={hours}
          onChange={handleHoursChange}
          displayEmpty
          sx={{ color: 'white' }} // For the Select text color
        >
          <MenuItem value="">HOURS</MenuItem>
          {HoursData.map((data) => (
            <MenuItem key={data.value} value={data.value}>
              {data.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        sx={{
          '&:hover': { backgroundColor: '#ffa001', borderColor: "white" },
          color: "white",
          width: "20rem",
          padding: "0.75rem",
          border: "1px solid white",
          borderRadius: "20px",
          marginTop: "2rem"
        }}
      >
        MAKE RESERVATION
      </Button>
    </Container>
  )
}

export default Reservation;
