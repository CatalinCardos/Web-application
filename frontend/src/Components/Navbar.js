import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
      <h className = "logoName">HaiLaSport</h>  
      <ul>
        
        <CustomLink to="/chooseSport">Home</CustomLink>
        <CustomLink to="/chooseSport/football">Football</CustomLink>
        <CustomLink to= "/chooseSport/bascket" >Basket</CustomLink>
        <CustomLink to= "/chooseSport/handball" >Handball</CustomLink>
        <CustomLink to="/chooseSport/tennis">Tennis</CustomLink>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <CustomLink to="/chooseSport/invite"><i class="fa fa-fw fa-envelope"></i></CustomLink>  
        <CustomLink to="/chooseSport/accountInfo"><i class="fa fa-fw fa-user"></i></CustomLink>
        <CustomLink to="/"><i className="fa fa-fw fa-sign-out"></i></CustomLink>     
      </ul>
      </ul>
      
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}