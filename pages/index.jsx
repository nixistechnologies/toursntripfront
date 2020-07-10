import HomeLayout from '../components/HomeLayout'
// import Fontawesome from 'react-fontawesome'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import  {List} from '../components/list'
import TravelContent from '../components/HomePage/context'
import BestTour from '../components/HomePage/bestTour'

import SinglePack from '../components/HomePage/singlePack'
// import {se} from '@fortawesome/fontawesome-svg-core'
export default function Home() {
    return(
        <HomeLayout title="Welcome">

            <div>
                <div className="background_img" style={{background:"url('/2.jpg') no-repeat"}}>    

                    <div className="header" style={{position:"absolute",top:0}}>
                        
                    <div className="navbar is-fixed-top_" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <Link href="/">
                            <a className="navbar-item" >
                                <h1 className="is-4 custom-brand">toursNtrip</h1>
                                {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                            </a>
                            </Link>

                        <div role="button" onClick={()=>tgl()} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </div>
                        </div> 

                        <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                        {/* <Link href="/create">
                            <a className="navbar-item">
                                Add New
                                </a>
                        </Link> */}
                        </div>
                    
                        <div className="navbar-end">
                            <a class="navbar-item">
                                Tours
                            </a>
                            <a class="navbar-item">
                                Explore
                            </a>

                            <a class="navbar-item">
                                Contact
                            </a>

                            <div className="navbar-item">
                            <div className="buttons">
                                <a className="">
                                {/* <strong>{data.currentUser.username}</strong> */}
                                </a>
                                {/* <a className="button is-light">
                                Log in
                                </a> */}
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>





                    </div>


                    <div className="search_on_background">
                        <div style={{width:"60%",margin:"auto"}}>

                        <div style={{textAlign:"center",marginBottom:'110px'}}>
                            <div style={{margin:"auto",fontFamily:"tourfont"}}>
                                <h1 className="title" style={{fontSize:"2.5em"}}>Tour & Expereinces Incredible Destinations</h1>
                            </div>
                        </div>
                        


                        <div className="columns">
                            <div className="column is-10">
                                <input type="text" style={{"background-color":"rgba(255,255,255,0.4)","color":"white"}} placeholder="search your tour" className="input"/>
                            </div>
                            <div className="column is-2">
                                <button type="button" style={{width:"100%"}} className="button is-primary">
                                    <span className="icon is-small">
                                    {/* <Fontawesome name="search" color="white" /> */}
                                    <FontAwesomeIcon icon={faSearch} color="white"/>
                                    </span>
                                </button>
                            </div>
                            {/* <Fontawesome name="search" color="white" /> */}
                        </div>
                        </div>
                    </div>
                    <div style={{position:'absolute',top:'90%',"maxWidth":""}}>
                        <div style={{'maxWidth':'800px',"margin":"auto"}}>
                        <List />
                        </div>
                        
                    </div>
                </div>
                
            </div>


            <div style={{maxWidth:"900px",margin:"auto"}}>
                {/* <h1 className="title">top Packages</h1> */}
                <TravelContent />
                <BestTour />
                <SinglePack />
            </div>




        </HomeLayout>
    )
}