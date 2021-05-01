import logoHorizontal from '../../assets/logo-horizontal.png';

function Navbar() {
    return <div style={{width: "100%", display: "flex"}}>
        <img 
            style={{ height:"100px", margin: "auto"}}
             className='navbar-brand'
             src={logoHorizontal} 
             alt="camackley logo horizontal"
            />
    </div>
}

export default Navbar;