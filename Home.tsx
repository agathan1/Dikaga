import Styles from './Home.module.scss'
import DenseTable from './Table'
// import {Leaderboard} from './Leaderboard'
import Leaderboard from './Leaderboard'
import { BackArrow } from 'assets/icons'


const Home = () => {
    return(
        <>
            
        <div className={Styles.header}>
        {/* <BackArrow className={Styles.back}/> */}
            <Leaderboard />
            <DenseTable />
        </div>
        </>
        
    )
}

export default Home