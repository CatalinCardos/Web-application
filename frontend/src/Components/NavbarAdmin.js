import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavbarAdmin() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/adminPage/users">Users</CustomLink>
        <CustomLink to="/adminPage/fields">Fields</CustomLink>
        <CustomLink to="/adminPage/addFields">Add Fields</CustomLink>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <CustomLink to="/"><i className="fa fa-fw fa-sign-out"></i></CustomLink>    
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