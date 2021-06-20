import styled from "styled-components";
import YourService from '@material-ui/icons/FormatListNumbered';
import WeddingPlan from '@material-ui/icons/Assignment';
import CurrentVendors from '@material-ui/icons/Store';
import BugdetReport from '@material-ui/icons/LocalAtm';
import Messanger from '@material-ui/icons/Message';
import Settings from '@material-ui/icons/SettingsApplications';

const SideBarUser = (props) => {
    return (
        <Container>
            <Content>
                <NavBar>
                    {/* Use Id to assign the couple name here  */}
                    <Logo>
                        <a href= '/'>
                            <img src= "../images/Logo.png"/> 
                        </a>
                    </Logo>
                    <TxtCoupleNames>Kasun and Shashini</TxtCoupleNames>
                    <Row>
                        <a href="/">
                            <YourService></YourService>
                            <BtnYourServices>Your Services</BtnYourServices>
                        </a>
                    </Row>
                    <Row>
                        <a href="/">
                            <WeddingPlan></WeddingPlan>
                            <BtnWeddingPlan>Wedding Plans</BtnWeddingPlan> 
                        </a>
                    </Row>
                    <Row>
                        <a href="/">
                            <CurrentVendors></CurrentVendors>
                            <BtnCurrentVendors>Current Vendors</BtnCurrentVendors>
                        </a>
                    </Row>
                    <Row>
                        <a href="/">
                            <BugdetReport></BugdetReport>
                            <BtnBugdetReport>Budget Report</BtnBugdetReport>
                        </a>
                    </Row>
                    <Row>
                        <a href="/">
                            <Messanger></Messanger>
                            <BtnMessanger>Messanger</BtnMessanger>
                        </a>
                    </Row>
                    <RowLast>
                        <a href="/">
                            <Settings></Settings>
                            <BtnSettings>Settings</BtnSettings>
                        </a>
                    </RowLast>
                </NavBar>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    z-index: 20;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #250B0E;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    min-width: 210px;
    min-height: 900px;
`;

const Content = styled.div`

`;

const NavBar = styled.div`
    
`;

const Logo = styled.div`
    a{
        img{
            max-width: 210px;
            opacity: 70%;
        }
    }
`;

const Row = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    a {
        display: flex;
        align-items: center;
        font-size: 17px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: white;
    } 
`;

const TxtCoupleNames = styled.div`
    max-width: 210px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    background-color: #FFFFFF;
    color: #122322;
`;

const BtnYourServices = styled.div`
    margin-left: 10px;
`;

const BtnWeddingPlan = styled.div`
    margin-left: 10px;
`;

const BtnCurrentVendors = styled.div`
    margin-left: 10px;
`;


const BtnBugdetReport = styled.div`
    margin-left: 10px;
`;

const BtnMessanger = styled.div`
    margin-left: 10px;
`;


const BtnSettings = styled.div`
    margin-left: 10px;
`;

const RowLast = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    a {
        display: flex;
        align-items: center;
        font-size: 17px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: white;
    } 
`;



export default SideBarUser;