import { Add, Edit, Search } from '@mui/icons-material'
import './topbar.css'
import Logo from '../../constants/download.jpg'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <nav className='navbar'>
        <section className='navbar__cont'>
          <Link to='/'>
            <img src={Logo} alt="" className="logo" />
          </Link>

            <div className='navber__search'>
                <input type="text" className="navber__search-input" placeholder='Search Player...'/>
                <Search className='icon'/>
            </div>

            <div className='navber__right'>
              <Link to='/create'>
                <Add className='icons'/>
              </Link>
              <Link to='/edit'>
                <Edit className='icons'/>
              </Link>
            </div>
        </section>
    </nav>
  )
}

export default Topbar
