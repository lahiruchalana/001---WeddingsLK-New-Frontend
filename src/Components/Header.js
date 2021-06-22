import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import { Link, useHistory, useLocation } from 'react-router-dom';



import useStyles from './HeaderStyles';

const Header = () => {


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);

    const logout = () => {

    };


    const classes = useStyles();


    return (
        <Nav>
            <HeaderLogo>
                <a href='/'>
                    <img src="../images/Logo.png" />
                </a>
            </HeaderLogo>
            <HeaderNav>
                {/* TODO -- make drop down here */}
                <a href='/weddingplans'>
                    <span>WEDDING PLANS</span>
                </a>
                <a href='/services'>
                    <span>SERVICES</span>
                </a>
                <a href='/vendors'>
                    <span>VENDORS</span>
                </a>
                <a href='/shops'>
                    <span>SHOPS</span>
                </a>
                <a href='/Galleries'>
                    <span>GALLERIES</span>
                </a>
                <a href='/about'>
                    <span>ABOUT</span>
                </a>
                <a href='/weddingwebsites'>
                    <span>WEDDING WEBSITES</span>
                </a>
                <a href='/weddinginvitationcards'>
                    <span>INVITATION CARDS</span>
                </a>
            </HeaderNav>
            {/* <HeaderSearch>
                <a href='/search/results'>
                    <input className="header__searchInput" type="text" />
                </a>
            </HeaderSearch>
            <Search>
                <a href="/search/reasults">
                    <SearchIcon></SearchIcon>
                </a>
            </Search> */}


            <ToolBar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    // <Button component={Link} to="/user/auth" variant="contained" color="primary">Sign In</Button>
                    <HeaderNavIcon>
                        <a href='/user/auth'>
                            <span>LogIn</span>
                        </a>
                        <a href='/user/auth'>
                            <span>SignUp</span>
                        </a>
                    </HeaderNavIcon>
                )}
            </ToolBar>



            {/* Previous Toolbar START */}


            {/* <ToolBar className={classes.toolbar}>
                {user ? (
                    <Profile className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <a href='/user/logout'>
                            <span>Logout</span>
                        </a>
                    </Profile>
                ) : (
                    <HeaderNavIcon>
                        <a href='/user/auth'>
                            <span>LogIn</span>
                        </a>
                        <a href='/user/auth'>
                            <span>SignUp</span>
                        </a>
                    </HeaderNavIcon>
                )}
            </ToolBar> */}


            {/* Previous Toolbar END */}


        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: o;
    left: 0;
    right: 0;
    height: 70px;
    width: 100%;
    background-color: #230723;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    letter-spacing: 2px;
    z-index: 3;
`;

// const Search = styled.div`
//     z-index: 5;
//     margin-top: 5px;
//     a {
//             color: #7E7272;

//         }
// `;


const ToolBar = styled.div`

`;
const Button = styled.div`

`;



// const Profile = styled.div`
//     align-items: center;
//     display: flex;
//     flex-flow: row nowrap;
//     height: 100%;
//     justify-content: flex-end;
//     margin: 0;
//     padding: 0;
//     position: relative;
//     margin-right: auto;
//     margin-left: 0px;

//     a {
//         color: white;
//     text-decoration: none;
//     font-size: 10px;
//     margin: 3px;
//     border: 1px solid white;
//     border-radius: 5px;
//     padding: 5px;
//     }

//     @media (max-width: 768px) {
//         display: none;
//     }
// `;

const Typography = styled.div`

    /* color: white;
    text-decoration: none;
    font-size: 10px;
    margin: 3px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px; */


`;

const Avatar = styled.div`

    /* width: 40px;
    height: auto; */


/* @media (max-width: 768px) {
        display: none;
} */

`;

// const Logout = styled.div`

//     color: white;
//     text-decoration: none;
//     font-size: 10px;
//     margin: 3px;
//     border: 1px solid white;
//     border-radius: 5px;
//     padding: 5px;
// `;


const HeaderNavIcon = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: 10px;
    margin-left: 0px;
    

    a {
        color: white;
    text-decoration: none;
    font-size: 10px;
    margin: 3px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    margin-left: 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

// const LogIn = styled.div`

//     color: white;
//     text-decoration: none;
//     font-size: 10px;
//     margin: 3px;
//     border: 1px solid white;
//     border-radius: 5px;
//     padding: 5px;
// `;

// const SignUp = styled.div`

//     color: white;
//     text-decoration: none;
//     font-size: 10px;
//     margin: 3px;
//     border: 1px solid white;
//     border-radius: 5px;
//     padding: 5px;


// `;

// const HeaderSearch = styled.div`
//     a {
//         input {
//             background-color: rgba(88, 83, 83, 0.986);
//             color: gray;
//             border-radius: 5px;
//         }

//     }

//     @media (max-width: 768px) {
//         display: none;
//     }
// `;


//  a {
//     color: white;
//     text-decoration: none;
//   }

const HeaderLogo = styled.div`
    a {
        img{
        background-color: aliceblue;
        padding-top: 5px;
        width: 180px;
        max-height: 80px;
        font-size: 0;
        display: inline-block;
        }
    }
`;

const HeaderNav = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 20px;

  
    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0 12px;

  
        span {
            color: white;
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

  
            &:before {
                background-color: white;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }  

        &:hover {
            span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            z-index: 5;
            }
        } 
    }

    @media (max-width: 768px) {
        display: none;
    }
`;




export default Header;
