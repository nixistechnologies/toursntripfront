import {CarouselProvider,Slider,Slide,ButtonBack,ButtonNext} from 'pure-react-carousel'


export const List = () =>{
    return(
        <div>
            <style jsx>{`
                ._head{
                    font-size:20px;
                    font-family:tourfont;
                    font-weight:bold;
                }
                .sub_head{
                    font-size:12px;

                }
                .background-overlay{
                    height:100%;
                    position:relative;
                    border-radius:15px;
                }
                .bottom_10{
                    position:absolute;
                    bottom:25px;
                }
                .t_heading{
                    text-align:center;
                    margin-bottom:10px;
                    font-family:tourfont;
                    font-size:25px;
                    margin-bottom:20px;
                }
                .t_heading h2{
                    font-weight:bold;
                }
            `}</style>

            <div className="t_heading">
                <h2>Top Packages</h2>
            </div>
            
        
            <CarouselProvider 
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={3}
                orientation="horizontal"
            >
                <Slider>
                <Slide index={0}>
                <div className="outer_bloc" style={{display:"flex"}}>
                <div className="inner_bloc">
                    <div>
                        <div className="center_background" style={{background:"url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg)",borderRadius:"15px"}}>
                            {/* <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img> */}
                        <div style={{background:"linear-gradient(rgba(0,0,0,0.3),transparent,black)"}} className="background-overlay">
                            <div className="bottom_10">
                                <h3 className="_head">Sydney</h3>
                                <h4 className="sub_head">Austraila</h4>
                            </div>
                            
                        </div>
                        </div>
    
                    </div>
                </div>
                <div className="inner_bloc">
                    <div>
                        <div className="center_background" style={{background:"url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/126/Haridwar.jpg)",borderRadius:"15px"}}>
                            {/* <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img> */}
                        <div style={{background:"linear-gradient(rgba(0,0,0,0.3),transparent,black)"}} className="background-overlay">
                            <div className="bottom_10">
                                <h3 className="_head">Bali</h3>
                                <h4 className="sub_head">Indonesia</h4>
                            </div>
                            
                        </div>
                        </div>
    
                    </div>
                </div>

                <div className="inner_bloc">
                    <div>
                        <div className="center_background" style={{background:"url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/273/Rishikesh.jpg)",borderRadius:"15px"}}>
                            {/* <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img> */}
                        <div style={{background:"linear-gradient(rgba(0,0,0,0.3),transparent,black)"}} className="background-overlay">
                            <div className="bottom_10">
                                <h3 className="_head">Tokyo</h3>
                                <h4 className="sub_head">Japan</h4>
                            </div>
                            
                        </div>
                        </div>
    
                    </div>
                </div>
                <div className="inner_bloc">
                    <div>
                        <div className="center_background" style={{background:"url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/548/camp%20%281%29.jpg)",borderRadius:"15px"}}>
                            {/* <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img> */}
                        <div style={{background:"linear-gradient(rgba(0,0,0,0.3),transparent,black)"}} className="background-overlay">
                            <div className="bottom_10">
                                <h3 className="_head">Reykjavik</h3>
                                <h4 className="sub_head">Ireland</h4>
                            </div>
                            
                        </div>
                        </div>
    
                    </div>
                </div>
            </div>
                </Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
            </CarouselProvider>
        </div>
    )
}




export const List1=()=>{
    return(
        <>
        <style jsx>{`
            .outer_bloc{
                display:flex
            }
            .outer_bloc div{
                // width:250px;
                margin : auto;
            }
            .inner_bloc{
                flex:1 1 25%
            }
            .inner_bloc img{
                height: 250px;
                max-width: 100%;
                border-radius: 20px;
                
            }
        `
        }
        </style>
        <div>

            <div className="outer_bloc">
                <div className="inner_bloc">
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img>
                        </div>
                        <div>
                            Rishikesh River Rafting
                        </div>

                    </div>
                </div>
                <div className="inner_bloc">
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img>
                        </div>
                        <div>
                            Rishikesh River Rafting
                        </div>

                    </div>
                </div>
                <div className="inner_bloc">
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img>
                        </div>
                        <div>
                            Rishikesh River Rafting
                        </div>

                    </div>
                </div>
                <div className="inner_bloc">
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/257/a94.jpg"></img>
                        </div>
                        <div>
                            Rishikesh River Rafting
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

// export const List;