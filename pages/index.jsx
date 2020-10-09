import HomeLayout from '../components/HomeLayout'
// import Fontawesome from 'react-fontawesome'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
// import  {List} from '../components/list'
import dynamic from 'next/dynamic'
// import NavBar from '../components/HomePage/navbar'
// import TravelContent from '../components/HomePage/context'
// import BestTour from '../components/HomePage/bestTour'
// import SinglePack from '../components/HomePage/singlePack'
// import {se} from '@fortawesome/fontawesome-svg-core'

const TravelContent = dynamic(()=>import('../components/HomePage/context'))
const BestTour = dynamic(()=>import('../components/HomePage/bestTour'))
const SinglePack = dynamic(()=>import('../components/HomePage/singlePack'))
const List = dynamic(()=>import('../components/list'))
const NavBar = dynamic(()=>import('../components/HomePage/navbar'))

export default function Home() {
    return(
        // <h2>Welcome</h2>

        <HomeLayout title="Welcome">
            <div>
                <div className="background_img" style={{background:"url(/4.webp)",position:'relative'}}>    
                    <div className="header" style={{position:"absolute",top:0}}>
                        
                    <NavBar />


                    </div>


                    <div className="search_on_background" style={{width:"100%"}}>
                        <div style={{width:"60%",margin:"auto"}}>

                        <div style={{textAlign:"center",marginBottom:'110px'}}>
                            <div style={{margin:"auto",fontFamily:"tourfont"}}>
                                <h1 className="title" style={{fontSize:"2.5em"}}>Tour & Expereinces Incredible Destinations</h1>
                            </div>
                        </div>
                        


                        <div className="columns">
                            <div className="column is-10">
                                <input type="text" style={{backgroundColor:"rgba(255,255,255,0.4)","color":"white"}} placeholder="search your tour" className="input"/>
                            </div>
                            <div className="column is-2">
                                <button type="button" style={{width:"100%"}} className="button is-primary">
                                    <span className="icon is-small">
                                    <FontAwesomeIcon icon={faSearch} color="white"/>
                                    </span>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div style={{position:'absolute',top:'50%',width:"100%"}}>
                        <div style={{'maxWidth':'800px',"margin":"auto",}}>
                        <List />
                        </div>
                        
                    </div>
                </div>
                
            </div>


            <div style={{maxWidth:"900px",margin:"auto"}} className="full_width">
                <TravelContent />
                <BestTour />
                <SinglePack />
            </div>




        </HomeLayout>
    )
}