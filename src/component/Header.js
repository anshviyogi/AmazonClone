import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

function Header() {

    const [{basket, user},dispatch] = useStateValue();
    console.log("User >>> ",user)
    // console.log(user.multiFactor.user.email)

    // This will show us the current products which are added in the basket yet . . .
    // console.log(basket)

    const handleAuthentication = ()=>{
    if(user){
        auth.signOut()
    }
    }

  return (
    
    <nav className='header'>
        {/* Logo Image */}
        <Link to='/'>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className='header__logo'/>
        </Link>

        {/* Search Bar */}
        <div className='header__search'>
        <input type='text' className='header__searchInput' placeholder='Search Products'/>
        <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            
            <Link to={!user && '/login'} className='header__link'>

            <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello {user? user.multiFactor.user.email.split('@')[0] : "Guest"}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out'  : 'Sign In'}</span>
            </div>

            </Link>
            
            <Link to='/' className='header__link'>

            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
            </div>

            </Link>
            
            <Link to='/' className='header__link'>

            <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
            </div>

            </Link>

            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header__optionLineTwo basketCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </nav>

  )
}

export default Header   