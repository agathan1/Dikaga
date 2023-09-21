import React from 'react'
import { Avatar, Container, Stack, Typography } from '@mui/material'
import BasicTable from './Tabledata'
import DenseTable from './Table'
// import DenseTable2 from './Table2'
import Datatable from './Datatable'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Styles from './Home.module.scss';
import { BackArrow, Clock, Winner2, Winner3 } from 'assets/icons'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Leaderboard = () => {
  const [value, setValue] = React.useState('individual');

  const handleChange = (
      event: React.MouseEvent, newValue: string,
    ) => {
      setValue(newValue);
    };

    const Item = styled(Paper)(({ theme }) => ({
      // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      // ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
    }));

 return (
    <Container sx={{backgroundColor: "#f4cb00", height: "100vh", textAlign: " center", justifyContent: "center"}}>
        <Typography 
        sx={{ 
        marginTop: "56px",
        fontFamily: "Poppins-Medium"}}>
          <Box position="absolute"left="22px"top="55px" ml="21px">
          <BackArrow />
          </Box>

          Leaderboard UT Fresh</Typography>
        {/* <Datatable /> */}
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            // className='d-flex'
            // className={Styles.container}
            // className={Styles.button}
            sx={{paddingTop: "4.2px", width: "170px", height: "26px", position: "relative", left: "18px", marginBottom: "16px"}}
            >
            <ToggleButton   value="individual">Individual</ToggleButton>
            <ToggleButton   value="android">Team</ToggleButton>
            </ToggleButtonGroup>
            <Box>
            <Avatar className={Styles.winner} sx={{alignItems: "center", justifyContent: "center"}} src="assets/images/profil.jpg"/>
            <Box position="relative" justifyContent="center" marginTop="20px">
            <Typography sx={{fontFamily: "Poppins-SemiBold", fontSize: 12}}>DAD_Yohanes</Typography>
            <Box sx={{ typography: 'body1', fontFamily: "SFUIDisplay-Medium" , fontSize: 12}}><Clock />82:01</Box>
            <Box sx={{ typography: 'body2', fontFamily: "SFUIDisplay-Medium" , fontSize: 12}}>550</Box>
            </Box>
            </Box>
            <Box sx={{ flexGrow: 1, backgroundColor: "#f4cb00"}}>
      <Grid container spacing={16}
      sx={{bottom: "80px", position: "relative"}}>
        <Grid item xs sx={{mt: "20px"}}>
          {/* <Winner2 /> */}
        </Grid>
        {/* <Grid item xs={6}>
          <Avatar className={Styles.winner} sx={{Width: "99.17px", Height: "107.18px"}} src="assets/images/profil.jpg"/>
        </Grid> */}
        <Grid item xs sx={{mt: "60px", mr: "20px"}}>
          {/* <Winner3 /> */}
        </Grid>
      </Grid>
    </Box>
            
        {/* <BasicTable /> */}
        {/* <BasicTable /> */}
        {/* <DenseTable2 /> */}
    </Container>
 )
}

export default Leaderboard;
