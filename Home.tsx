import Styles from './Home.module.scss'
import DenseTable from './Table'
// import {Leaderboard} from './Leaderboard'
import Leaderboard from './Leaderboard'
import { BackArrow } from 'assets/icons'
import { Link } from 'react-router-dom'
import BasicTable from './Tabledata'
import { Container, Stack } from '@mui/material'




const Home = () => {
    return(
        <>
        <Stack sx={{ height: "100vh"}}>
            <Leaderboard />
            {/* <DenseTable2 /> */}
            {/* <BasicTable /> */}
            </Stack>
        </>
        
    )
}

export default Home
