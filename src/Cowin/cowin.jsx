import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import "./App.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "../img/progressring.gif";

const Cowin = () => {
  const [statedata, setstatedata] = useState([]);
  const [districtdata, setdistrictdata] = useState([]);
  const [Cstate, setCstate] = useState("");
  const [Cdistrict, setCdistrict] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchdata, setsearchdata] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [pincode, setpincode] = useState("");
  const [age, setage] = useState("");
  const [vacinnetype, setvacinnetype] = useState("");
  const [availibility, setavailibility] = useState("");
  const [searchfound, setsearchfound] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //const classes = useStyles();
  useEffect(() => {
    //setstatedata([]);
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => response.json())
      .then((data) => {
        var res = data.states;
        setstatedata(data.states);
        console.log(statedata);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const fetchDistrictData = (state) => {
    setLoading(true);
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + state)
      .then((response) => response.json())
      .then((data) => {
        var res = data.states;
        setdistrictdata(data.districts);
        console.log(districtdata);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const fetchSearchData = (state) => {
    setLoading(true);
    console.log(loading);
    if ((Cstate != "" && Cdistrict != "") || pincode != "") {
      var today = new Date(),
        date =
          today.getDate() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getFullYear();
      var url =
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" +
        Cdistrict +
        "&date=" +
        date;
      console.log(url);
      fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI4MGNmZWViMS1mZTQwLTQ4YmItOGI3MS1jYWMwOTJlODVjYWQiLCJ1c2VyX3R5cGUiOiJCRU5FRklDSUFSWSIsInVzZXJfaWQiOiI4MGNmZWViMS1mZTQwLTQ4YmItOGI3MS1jYWMwOTJlODVjYWQiLCJtb2JpbGVfbnVtYmVyIjo4NzU0MDcyNzcxLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjY4ODc2MjY5Mjc2NzgwLCJ0eG5JZCI6ImY0NGIyNjkwLThhMGEtNDNlYy05OWRkLTFkNGE1YTE2YmY1NCIsImlhdCI6MTYyMDk4MzU0NiwiZXhwIjoxNjIwOTg0NDQ2fQ.RLkG61Z1quzA16EUtfesIHQAIS5I1TcbsC5gfg-A4VI",
          //'Content-Type': 'application/x-www-form-urlencoded'
        }),
        //  body: 'A=1&B=2'
      })
        .then((response) => response.json())
        .then((data) => {
          var res = data.centers;
          var value = res;
          if (pincode != "") {
            value = value.filter(function (obj) {
              return obj.pincode == pincode;
            });
          }
          if (age != "") {
            value = value.filter(function (obj) {
              var sessionfilter = obj.sessions.filter(function (obj_session) {
                return obj_session.min_age_limit == age;
              });
              if (sessionfilter.length > 0) {
                return obj;
              }
            });
          }
          if (vacinnetype != "") {
            value = value.filter(function (obj) {
              var sessionfilter = obj.sessions.filter(function (obj_session) {
                return obj_session.vaccine == vacinnetype;
              });
              if (sessionfilter.length > 0) {
                return obj;
              }
            });
          }
          if (availibility != "") {
            value = value.filter(function (obj) {
              var sessionfilter = obj.sessions.filter(function (obj_session) {
                return obj_session.available_capacity > 0 &&  obj_session. obj_session.vaccine == vacinnetype == age;
              });
              if (sessionfilter.length > 0) {
                return obj;
              }
            });
          }
          if (value.length == 0 || value == undefined) {
            setsearchfound(true);
          }
          setsearchdata(value);
          console.log(searchdata);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          //setLoading(false);
        });
    } else {
      alert("Please provide either (state & district or pincode)");
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    avatar: {
      background: "orange",
    },
    available: {
      background: "#49B215",
      color: "white",
    },
    Notavailable: {
      background: "red",
      color: "white",
    },
    capactitzero: {
      color: "red",
    },
    capactityavailable: {
      color: "#49B215",
    },
    noresult: {
      color: "red",
      textAlign: "center",
      FormatAlignJustify: "center",
    },
    hideimage: {
      display: "none",
    },
    showimage:{
      display:"",
    }
  }));

  const handleChange = (event) => {
    var name = event.target.value;
    setCstate(name);
    fetchDistrictData(name);
  };

  const OnhandleDistrictChange = (event) => {
    var name = event.target.value;
    setCdistrict(name);
    //fetchDistrictData(name);
  };

  const OnhandleageChange = (event) => {
    var name = event.target.value;
    setage(name);
    //fetchDistrictData(name);
  };

  const OnhandleVaccinetypeChange = (event) => {
    var name = event.target.value;
    setvacinnetype(name);
    //fetchDistrictData(sname);
  };

  const OnhandleAvailablityChange = (event) => {
    var name = event.target.value;
    setavailibility(name);
    //fetchDistrictData(name);
  };

  const onSearchClick = (e) => {
    fetchSearchData();
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            Eshkha - Covid Vaccine Availablity Helper
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          <Grid container spacing={1}>
            <Grid item xs={3} sm={3}>
              <Paper className={classes.paper}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="State-native-helper">STATE</InputLabel>
                  <NativeSelect
                    //value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "State",
                      id: "State-native-helper",
                    }}
                  >
                    {/**/}
                    {/* {
                    Object.keys(statedata).map(function (key, index) {
                      <option value={statedata.states[index].state_id}
                       aria-label={statedata.states[index].state_id}
                       >
                      </option>
                    })
                    } */}
                    <option aria-label="None" value="" />
                    {statedata.map((item) => {
                      return (
                        <option
                          key={item.state_id}
                          aria-label={item.state_id}
                          value={item.state_id}
                        >
                          {item.state_name}
                        </option>
                      );
                    })}
                  </NativeSelect>

                  <FormHelperText>Give your desired state</FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Paper className={classes.paper}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="State-native-helper">
                    DISTRICT
                  </InputLabel>
                  <NativeSelect
                    //value={state.age}
                    onChange={OnhandleDistrictChange}
                    inputProps={{
                      name: "District",
                      id: "State-native-helper",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {districtdata.map((item) => {
                      return (
                        <option
                          key={item.district_id}
                          aria-label={item.district_id}
                          value={item.district_id}
                        >
                          {item.district_name}
                        </option>
                      );
                    })}
                  </NativeSelect>
                  <FormHelperText>Give your desired district</FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Paper className={classes.paper}>
                <FormControl className={classes.formControl}>
                  {/* <InputLabel htmlFor="State-native-helper">PINCODE</InputLabel> */}
                  <TextField
                    id="standard-basic"
                    label="PINCODE"
                    onChange={(event) => setpincode(event.target.value)}
                  />
                  <FormHelperText>Give your desired Pincode</FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={3}>
              {/* <Paper className={classes.paper}>
                
                <FormHelperText>
                  Click Search to get the Vaccine Counts Availablity in
                  Hospitals
                </FormHelperText>
              </Paper> */}

              <Paper>
                <Typography paragraph>
                  <NativeSelect
                    onChange={OnhandleageChange}
                    //onChange={handleChange}
                    inputProps={{
                      name: "AGE",
                      id: "age-native-helper",
                    }}
                  >
                    <option aria-label="None" value="">
                      AGE
                    </option>
                    <option aria-label="18" value="18">
                      18+
                    </option>
                    <option aria-label="45" value="45">
                      45+
                    </option>
                  </NativeSelect>
                  &nbsp;
                  <NativeSelect
                    onChange={OnhandleVaccinetypeChange}
                    inputProps={{
                      name: "vaccine",
                      id: "vaccine-native-helper",
                    }}
                  >
                    <option aria-label="None" value="">
                      Vaccine
                    </option>
                    <option aria-label="COVAXIN" value="COVAXIN">
                      COVAXIN
                    </option>
                    <option aria-label="COVISHIELD" value="COVISHIELD">
                      COVISHIELD
                    </option>
                  </NativeSelect>
                  &nbsp;
                  <NativeSelect
                    onChange={OnhandleAvailablityChange}
                    inputProps={{
                      name: "Availablity",
                      id: "age-native-helper",
                    }}
                  >
                    <option aria-label="None" value="">
                      Availablity
                    </option>
                    <option aria-label="Available" value="Available">
                      Available
                    </option>
                  </NativeSelect>
                </Typography>
                <Typography paragraph>
                  <Button
                    onClick={() => {
                      onSearchClick();
                    }}
                    variant="contained"
                    color="primary"
                  >
                    SEARCH
                  </Button>
                </Typography>
              </Paper>
            </Grid>
            {searchdata.map((item) => {
              const AvatarIniitial = item.name.slice(0, 1);
              const slots = item.slots;
              const slotavaiable_45 = item.sessions.filter(function (obj) {
                return obj.available_capacity > 0 && obj.min_age_limit == 45;
              });
              const slotavaiable_18 = item.sessions.filter(function (obj) {
                return obj.available_capacity > 0 && obj.min_age_limit == 18;
              });
              return (
                <Grid item xs={12} sm={3}>
                  <Paper className={classes.paper}>
                    <Button
                      variant="contained"
                      color="Green"
                      className={
                        slotavaiable_45.length > 0
                          ? classes.available
                          : classes.Notavailable
                      }
                    >
                      45+
                    </Button>
                    &nbsp;
                    <Button
                      variant="contained"
                      color="Green"
                      className={
                        slotavaiable_18.length > 0
                          ? classes.available
                          : classes.Notavailable
                      }
                    >
                      18+
                    </Button>
                    <Card className={classes.root}>
                      <CardHeader
                        avatar={
                          <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                          >
                            {AvatarIniitial}
                          </Avatar>
                        }
                        title={item.name}
                        subheader={item.date}
                      />

                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.sessions.map((session_item, index) => {
                            return (
                              <React.Fragment>
                                <Typography>*********************</Typography>
                                <Typography>
                                  Date:{session_item.date}
                                </Typography>
                                <Typography
                                  className={
                                    session_item.available_capacity == 0
                                      ? classes.capactitzero
                                      : classes.capactityavailable
                                  }
                                >
                                  Available Capacity:
                                  {session_item.available_capacity} | Fees:
                                  {item.fee_type} | Age Limit::
                                  {session_item.min_age_limit} | Vaccine:
                                  {session_item.vaccine}
                                </Typography>
                                {/* <Typography></Typography>
                                <Typography>
                                  
                                </Typography>
                                <Typography>
                                  
                                </Typography> */}
                                <Typography>Slots </Typography>
                                {session_item.slots.map((item) => {
                                  return "<<" + item + ">>";
                                })}
                              </React.Fragment>
                              // "----Date :" + session_item.date +"-----"+
                              // "| Available Capacity : " + session_item.available_capacity +
                              // "| Fees : " + session_item.fee +
                              // "| Age Limit:" + session_item.min_age_limit +
                              // "| Vaccine : " + session_item.vaccine +
                              // "| Slots :" +

                              //
                            );
                          })}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <IconButton
                          // className={clsx(classes.expand, {
                          //   [classes.expandOpen]: expanded,
                          // })}
                          onClick={() => {
                            handleExpandClick();
                          }}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                        <a
                          target="_blank"
                          href="https://selfregistration.cowin.gov.in/appointment"
                        >
                          Book Appointment
                        </a>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>Address:</Typography>
                          <Typography paragraph>{item.address}</Typography>

                          <Typography paragraph>
                            {item.state_name},{item.district_name},
                            {item.block_name}
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Paper>
                </Grid>
              );
            })}

            
          </Grid>
            <Typography    className={!searchfound ? classes.noresult : ""}>
              No Result
            </Typography>
          <img
            className={!loading ? classes.hideimage : classes.showimage}
            src={logo}
            alt="Logo"
          />
           
        </Box>
      </Container>
      This Tool has been developed to help my CITIZEN'S of INDIA to get
      vaccinated,Be Strong ! Stay Strong ! Jai Hind !!
      <Typography paragraph>Developer:gouthamarul23@gmail.com</Typography>
    </React.Fragment>
  );
};

export default Cowin;
