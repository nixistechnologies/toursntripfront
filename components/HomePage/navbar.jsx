import Link from 'next/link'



export default ()=>{
    const data = true;
    if(data)
    {


      const tgl = () =>{
        // console.log("clicked")
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // if ($navbarBurgers.length > 0) {

          $navbarBurgers.forEach( el => {

            // el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
            // })
          })
        // }
        // console.log("clicked")
      }

      return(
        
        <div className="main_content">
            <style jsx>{`
                .navbar-menu{
                    background-color:transparent
                }
            `}
            </style>            
            <div className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                <a className="navbar-item" >
                    <h1 className="is-4 custom-brand">toursNtrip</h1>
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
            <Link href="/create">
                <a className="navbar-item">
                    Add New
                    </a>
                </Link>
            </div>
        
            <div className="navbar-end">
                <a className="navbar-item">
                    Tours
                </a>
                <a className="navbar-item">
                    Explore
                </a>

                <a className="navbar-item">
                    Contact
                </a>

                <div className="navbar-item">
                <div className="buttons">
                    <a className="">
                    </a>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
    }
    
}