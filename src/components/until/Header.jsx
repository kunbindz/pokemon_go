import React, { useEffect } from 'react'
import { BsFillBagFill } from "react-icons/bs"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addBasket } from '../../actions/addAction'

const Header = ({ basketProps }) => {
    // var store = JSON.parse(localStorage.getItem('CartItems'))
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
                <Link to="/" >
                    <h1 className="navbar-brand text-uppercase p-0 m-0 ">Pokemon G</h1>
                    <img className="logo" src="http://images6.fanpop.com/image/photos/38900000/Pokeball-pokemon-38912743-894-894.png" />
                </Link>
                <Link to="/mybag">
                    <BsFillBagFill className="mybag" />
                    <span>{basketProps.basketNumber}</span>
                </Link>

            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})
export default connect(mapStateToProps, { addBasket })(Header)


