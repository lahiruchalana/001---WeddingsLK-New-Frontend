import styled from "styled-components"


const Footer = (props) => {
    return (
        <Nav>
            <Container>
                <FooterLogo>
                    <a href="/">
                        <img src= "../images/Logo.png"/>
                    </a>        
                </FooterLogo>
                <FooterMobileAppLogo>
                    <a href="/">
                        <img src= "../images/mac-logo.png"/>
                    </a>                   
                    <AndroidImg>
                        <img src= "../images/android-logo1.ico"/>
                    </AndroidImg>                
                </FooterMobileAppLogo>
                <LogoInfoText>Available On Now</LogoInfoText>
                <FooterSocialMediaLogo>
                    <FacebookImg>
                        <img src= "../images/logo-facebook.png"/>
                    </FacebookImg>         
                    <a href="/">
                        <img src= "../images/twitter-logo.png"/>
                    </a>     
                    <a href="/">
                        <img src= "../images/pinterest-logo.png"/>
                    </a>        
                    <a href="/">
                        <img src= "../images/instagram-logo1.ico"/>
                    </a>              
                </FooterSocialMediaLogo>
                <LogoInfoText>© 2021 WeddingsLK LLC All rights reserved.</LogoInfoText>
            </Container>
            <Container>
                <Content>
                    <Title>LINKS</Title>
                    <a href= '/'>
                        <span>Home</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Wedding Plans</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Vendor Bunches</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Services</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Shops</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Galleries</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>About</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Wedding Website</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Wedding Invitations</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>User Profile</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Community Feedback</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Wedding Ideas</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Search</span>
                    </a><br/>  
                </Content>
            </Container>
            <Container>
                <Content>
                    <Title>ADDRESS</Title>
                    <div>WeddingsLK wedding Planner,</div>
                    <div>No. 379A,</div>
                    <div>Kaluthara,</div>
                    <div>Mathugama,</div>
                    <div>Sri Lanka.</div>
                </Content>
                <Content>
                    <Title>CONTACT</Title>
                    <div>WeddingsLKSL@gmail.com</div>
                    <div>+94 76 90 184 90</div>
                </Content>
                <Content>
                    <Title>VISIT OUR SERVICES</Title>
                    <a href= '/'>
                        <span>Wedding Websites</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Wedding Invitations</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Wedding Ideas and Tips</span>
                    </a><br/>  
                </Content>
            </Container>
            <Container>
                <Content>
                    <Title>ARE YOU A VENDOR?</Title>
                    <a href= '/'>
                        <span>Learn about WeddingsLK for Business Visit Vendor SignUp and stay tuned with us.</span>
                    </a>
                </Content>
                <Content>
                    <Title>CONTACT EMPLOYEES</Title>
                    <div>WeddingsLKSL@gmail.com</div>
                    <div>+94 76 90 184 90</div>
                </Content>
                <Content>
                    <a href= '/'>
                        <span>Terms of Use</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Privacy and Cookies Statement</span>
                    </a><br/>  
                    <a href= '/'>
                        <span>Cookie Consent</span>
                    </a><br/>  
                </Content>
            </Container>
        </Nav>
    );
};

const Nav = styled.nav`
    margin-left: 0;
    bottom: 0;
    right: 0;
    min-height: 400px;
    background-color: rgba(4, 10, 46, 0.986);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 36px;
    letter-spacing: 2px;
    z-index: 3;
    margin-bottom: 0px;

`;

const Container = styled.div`
    min-height: 400px;
    min-width: 20%;
    margin: 0;
    padding: 0;
    position: relative;
    margin-left: 40px;
    padding-top: 40px;

    div{

    }
`;
    
const FooterLogo = styled.div`
    margin-bottom: 30px;
    a {
        text-decoration: none;
        img {
        background-color: #FFF;
        padding: 0;
        width: 170px;
        max-height: 75px;
        font-size: 0;
        display: inline-block;
        border-radius: 2px;
        }
    }
`;

const FooterMobileAppLogo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    a {
        text-decoration: none;
        img {
        padding: 0;
        width: 60px;
        max-height: 60px;
        font-size: 0;
        display: inline-block;
        margin-right: 30px;
        }
    }
`;

const FooterSocialMediaLogo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    a {
        text-decoration: none;
        img {
        padding: 0;
        width: 40px;
        max-height: 40px;
        font-size: 0;
        display: inline-block;
        margin-right: 30px;
        }
    }
`;

const AndroidImg = styled.div`
    img{
        padding: 0;
        width: 110px;
        max-height: 120px;
        font-size: 0;
        display: inline-block;
        margin-right: 30px;
    }
`;

const FacebookImg = styled.div`
    img{
        padding: 0;
        width: 60px;
        max-height: 60px;
        font-size: 0;
        display: inline-block;
        margin-right: 30px;
    }
`;

const LogoInfoText = styled.div`
    margin-bottom: 30px;
`;

const Content = styled.div`
    a {
        text-decoration: none;
        span {
            margin-bottom: 20px;
            padding-bottom: 40px;
            text-decoration: none;
            color: white;
        }

    }
    div {
    }
`;

const Title = styled.div`
    margin: 15px;
`;


export default Footer;
