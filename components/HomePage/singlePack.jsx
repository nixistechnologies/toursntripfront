const SinglePack = () =>{
    return(
        <div style={{marginBottom:"100px"}}>
            <div className="image-radius" style={{position:"relative",background:'url(https://res.cloudinary.com/kmadmin/image/upload/w_1300,c_scale/kiomoi/545/colombo.jpg)',backgroundPosition:'center',backgroundSize:'cover',height:"250px"}}>
                <div>
                    <div style={{position:"absolute",top:"20%"}}>
                        <div style={{width:"80%",margin:"auto"}}>
                            <div>
                                <span>From</span> 
                                <span className="theme-color">23000 INR</span>
                            </div>
                            <div>
                                <h2 className="m_heading">Welcome To Kerala</h2>
                                <h2 className="m_heading">Discover Alleppey</h2>
                                <p>Top Deals</p>
                                <input type="button" className="button is-rounded is-white" value="Explore Now" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePack;