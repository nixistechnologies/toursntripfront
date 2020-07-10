
const BestTour =()=>{
    return(
        <div style={{marginBottom:"100px"}}>
            <style jsx>{`
                .row_item{
                    height:250px;
                    position:relative;

                }
                .cover_{
                    height:100%
                }
                .columns{
                    padding:0.5rem;
                }
                .abs_content{
                    background:rgb(47, 47, 47);
                    text-align:center;
                    position:absolute;
                    height:50px;
                    bottom:0;
                    border-radius:0 0 15px 15px;
                }
                .abs_content div{
                    color:#00ffa9 !important;
                    font-size:12px;
                    font-weight:bold;
                }
            `}
            </style>

            
            <div style={{marginBottom:"20px"}}>
                <h2 className="m_heading txt-center">Best Tours</h2>
            </div>
            
            
            <div>
                <div className="columns">
                    <div className="column">
                        <div className="row_item image-radius" style={{background:'url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/548/nag-tibba-6.jpg)',backgroundSize:'cover',backgroundPosition:'center'}} >
                            {/* <img className="cover_" src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/548/nag-tibba-6.jpg"/> */}
                            <div className="abs_content">
                                <h2>Rishikesh</h2>
                                <div>
                                    (30+)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row_item image-radius" style={{background:'url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/548/NagTibbaTrek_%20%281%29.jpg)',backgroundSize:'cover',backgroundPosition:'center'}} >
                            {/* <img className="cover_" src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/548/NagTibbaTrek_%20%281%29.jpg" /> */}
                            <div className="abs_content">
                                <h2>CharDham</h2>
                                <div>
                                    (20+)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row_item image-radius" style={{background:'url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/545/Kandy1.jpg)',backgroundSize:'cover',backgroundPosition:'center'}} >
                            {/* <img className="cover_" src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/545/Kandy1.jpg"/> */}
                            <div className="abs_content">
                                <h2>Gangtok</h2>
                                <div>
                                    (60+)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row_item image-radius" style={{background:'url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/547/Beaches%20%281%29.jpg)',backgroundSize:'cover',backgroundPosition:'center'}} >
                            {/* <img className="cover_" src="https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/547/Beaches%20%281%29.jpg"/> */}
                            <div className="abs_content">
                                <h2>Kochi</h2>
                                <div>
                                    (30+)
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="column">
                        <div className="row_item image-radius" style={{background:'url(https://res.cloudinary.com/kmadmin/image/upload/w_400,c_scale/kiomoi/547/Beaches%20%281%29.jpg)',backgroundSize:'cover',backgroundPosition:'center'}} >
                            
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BestTour;