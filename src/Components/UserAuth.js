import styled from "styled-components";
import React, { useState } from 'react';

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './UserAuthInput';
import useStyles from './UserAuthStyles';




const UserSignup = (props) => {

    const isSignup = false;

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }


    return (
        <AllContainer>
            <Content>
{/* ////////////////////////// Start of common page top section //////////////////// */}

                
                <BgImageHome src= "/images/HomeGallery1.jpg"/>
                <Title1>WEDDING PLANS</Title1>
                <TitleUnderline1></TitleUnderline1>
                <P1>We provide 3 type of wedding plans and customized wedding plans for your precious wedding</P1>
                <Title2>VENDOR BUNCHES</Title2>
                <TitleUnderline2></TitleUnderline2>
                <P2>We provide you set of vendors contained, vendor bunches for your beautiful wedding</P2>
                <Btns>
                    <BtnVWeddingPlans>
                        <a href= "/user/profile">
                            <BtnOurServicesText>Wedding Plans</BtnOurServicesText>
                        </a>
                    </BtnVWeddingPlans>
                    <BtnVendorBunches>
                        <a href= "/user/profile">
                            <BtnVendorServicesText>Vendor Bunches</BtnVendorServicesText>
                        </a>
                    </BtnVendorBunches>
                    <BtnCustomizedPlans>
                        <a href= "/user/profile">
                            <BtnVendorServicesText>Customized Plans</BtnVendorServicesText>
                        </a>
                    </BtnCustomizedPlans>
                </Btns>
                <BgColoredSection1></BgColoredSection1>


                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper} elevation={3}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                { isSignup && (
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                                )}
                                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                { isSignup ? 'Sign Up' : 'Sign In' }
                            </Button>

                            {/* Have to Add Google Auth Here*/}


                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Container>



            </Content>
        </AllContainer>
    );
};





const AllContainer = styled.div`
    a {
        text-decoration: none;
        color: white;
    }
`;

const Content = styled.div`
 
`;

const BgImageHome = styled.img`
    height: 850px;
    width: 100%;
    z-index: -100;
    position: relative;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 2), rgba(0, 0, 0, 2)); */

`;

const Title1 = styled.div`
    margin-top: -350px;
    margin-left: 150px;
    color: #FFF;
    width: 50%;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;
`;

const TitleUnderline1 = styled.div`
    margin-top: 10px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 1;
    width: 23%;
    margin-left: 130px;
`;

const P1 = styled.div`
    margin-top: 10px;
    width: 600px;
    margin-left: 130px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Title2 = styled.div`
    margin-top: 10px;
    margin-left: 850px;
    color: #FFF;
    width: 500px;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;

`;

const TitleUnderline2 = styled.div`
    margin-top: 10px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 1;
    width: 23%;
    margin-left: 840px;
`;

const P2 = styled.div`
    margin-top: 10px;
    width: 600px;
    margin-left: 840px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Btns = styled.div`
    display: flex;
`;

const BtnVWeddingPlans = styled.div`
    background-color: #02031A;
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnVendorBunches = styled.div`
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    background-color: #101F0B;  
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnCustomizedPlans = styled.div`
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    background-color: #3A0C1D;  
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnOurServicesText = styled.div`

`;

const BtnVendorServicesText = styled.div`

`;


const BgColoredSection1 = styled.div`
    margin-top: -340px;
    opacity: 80%;
    z-index: -5;
    position: relative;
    background-color: #07464D;
    height: 500px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;




export default UserSignup;