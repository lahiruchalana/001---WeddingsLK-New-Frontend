import styled from "styled-components";

const About = (props) => {
    return (
         <Container>
            <Content>
{/* ////////////////////////// Start of common page top section //////////////////// */}
                <BgImageHome src= "/images/AboutPage.jpg"/>
                <Title1>SERVICES</Title1>
                <TitleUnderline1></TitleUnderline1>
                <P1>We provide wide range of services for your precious wedding</P1>
                <Title2>VENDOR AND OUR SERVICES</Title2>
                <TitleUnderline2></TitleUnderline2>
                <P2>We provide you mainly two different services</P2>
                <Btns>
                    <BtnOurServices>
                        <a href= "/user/profile">
                            <BtnOurServicesText>OUR SERVICES</BtnOurServicesText>
                        </a>
                    </BtnOurServices>
                    <BtnVendorServices>
                        <a href= "/user/profile">
                            <BtnVendorServicesText>VENDOR SERVICES</BtnVendorServicesText>
                        </a>
                    </BtnVendorServices>
                </Btns>
                <BgColoredSection1></BgColoredSection1>
            </Content>
        </Container>
    );
};

const Container = styled.div`
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
    width: 15%;
    margin-left: 130px;
`;

const P1 = styled.div`
    margin-top: 10px;
    width: 400px;
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
    width: 600px;
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
    width: 35%;
    margin-left: 840px;
`;

const P2 = styled.div`
    margin-top: 10px;
    width: 400px;
    margin-left: 1000px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Btns = styled.div`
    display: flex;
`;

const BtnVendorServices = styled.div`
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
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnOurServices = styled.div`
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
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnOurServicesText = styled.div`

`;

const BtnVendorServicesText = styled.div`

`;


const BgColoredSection1 = styled.div`
    margin-top: -320px;
    opacity: 80%;
    z-index: -5;
    position: relative;
    background-color: #3E0C33;
    height: 500px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;


export default About;