
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const  Nav=()=> {
  let obj=useContext(Ct)
  return (
    
    <nav>
       {obj.data.token==""&& <Link  to='/' className='link'>Login</Link>}
       {obj.data.token==""&&  <Link to='/reg' className='link'>Register</Link>}
       {obj.data.token==""&&  <Link to='/adminlogin' className='link'>AdminLogin</Link>}
       {obj.data.token!=""&&  !obj.data.isadmin&&<Link to='/home' className='link'>Home</Link>}
       {obj.data.token!=""&&  <Link to='/logout' className='link'>Logout</Link>}
       {obj.data.token!=""&&  <div className='nav'>{obj.data.name}</div>}
    </nav>
  )
}

export default Nav