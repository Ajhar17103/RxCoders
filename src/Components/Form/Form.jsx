import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import Divider from "@mui/material/Divider";

export class Form extends React.Component {
  
  state={
    name:'',
    address:'',
    sateDescription:'',
    latitude:0,
    longitude:0,



  }

 

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    alert('form has been submit successful, check  form data on console ')
    e.target.reset()
    this.setState({
      name:'',
    address:'',
    sateDescription:'',
    latitude:0,
    longitude:0,

    })
    console.log(this.state)
  }
  cancel=(e)=>{
    e.preventDefault();
   
    this.setState({
      name:'',
    address:'',
    sateDescription:'',
    latitude:0,
    longitude:0,

    })
  }
  render() {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" className="card my-5">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={this.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, mr: 2 }}
            >
              <FontAwesomeIcon icon={faFloppyDisk} /> Save
            </Button>

            <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }} onClick={this.cancel}>
              <FontAwesomeIcon icon={faXmark} /> Cancel
            </Button>
            <Divider />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandler}
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Jurisdiction/City/region"
              type="text"
              id="address"
              value={this.state.address}
              onChange={this.onChangeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="sateDescription"
              label="Site Descriotion"
              type="test"
              id="sateDescription"
              value={this.state.sateDescription}
              onChange={this.onChangeHandler}
            />
            <TextField
              margin="normal"
              required
              name="latitude"
              label="Latitude"
              type="number"
              id="latitude"
              sx={{ mr: 5 }}
              value={this.state.latitude}
              onChange={this.onChangeHandler}
            />
            <TextField
              margin="normal"
              required
              name="longitude"
              label="Longitude"
              type="number"
              id="longitude"
              value={this.state.longitude}
              onChange={this.onChangeHandler}
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%", mt: 2, p: 2, backgroundColor: "#9d9c9c29" }}>
          <Typography variant="h6" gutterBottom component="div">
            Audit Log:
          </Typography>
          <Divider />
          <Typography variant="subtitle2" gutterBottom component="div">
            Create by simon on 2/1/2020, 12:00:00 AM
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Create by Nadite on 2/12/2021, 11:00:50 PM
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
    )
  }
}

export default Form