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
          <Box position="absolute"left="22px"top="55px" ml="35px">
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
        {/* <Grid item xs sx={{mt: "20px"}}> */}
          {/* <Winner2 /> */}
        {/* </Grid> */}
        <Box position="absolute"ml="110px" left="33px" top="100px">
          {/* <Grid item > */}
            <Avatar className={Styles.winner2}src="assets/images/profil.jpg"/>
            <Typography fontSize="12px" fontFamily="Poppins-SemiBold" textAlign="center">Agathan</Typography>
            <Box textAlign="center" sx={{ typography: 'body1', fontFamily: "SFUIDisplay-Medium" , fontSize: 12}}><Clock />82:01</Box>
            <Box textAlign="center" sx={{ typography: 'body2', fontFamily: "SFUIDisplay-Medium" , fontSize: 12}}>550</Box>
          {/* </Grid> */}
        </Box>
        <Box position="relative" top="130px" ml="130px" left="250px">
        {/* <Grid > */}
          <Avatar className={Styles.winner3}src="assets/images/profil.jpg"/>
        <Typography textAlign="center"
            fontSize="12px" 
            fontFamily="Poppins-SemiBold">Aslam</Typography>
            <Box textAlign="center" sx={{ typography: 'body1', fontFamily: "SFUIDisplay-Medium" , fontSize: 12}}><Clock />82:01</Box>
            <Box textAlign="center" sx={{ typography: 'body2', fontFamily: "SFUIDisplay-Medium" , fontSize: 12}}>550</Box>
          {/* <Winner3 /> */}
        {/* </Grid> */}
        </Box>
      </Grid>
    </Box>
            
        {/* <BasicTable /> */}
        {/* <BasicTable /> */}
        {/* <DenseTable2 /> */}
    </Container>
 )
}

export default Leaderboard;
