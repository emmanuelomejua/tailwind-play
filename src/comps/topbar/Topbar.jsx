import { Add, Edit, Search } from '@mui/icons-material'
import './topbar.css'
import Logo from '../../constants/download.jpg'

const Topbar = () => {
  return (
    <nav className='navbar'>
        <section className='navbar__cont'>
            <img src={Logo} alt="" className="logo" />

            <div className='navber__search'>
                <input type="text" className="" placeholder='Search Player...'/>
                <Search/>
            </div>

            <div className='navber__right'>
                <Add/>
                <Edit/>
            </div>
        </section>
    </nav>
  )
}

export default Topbar
