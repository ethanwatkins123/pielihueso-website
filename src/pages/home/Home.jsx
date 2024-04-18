import Layout from "../../layouts/layout/Layout";

import testImageDesktop from "../../assets/images/Home/Desktop/04.2024-WebPielihueso-Img-Home-Desktop-1.jpg";
import testImageTablet from "../../assets/images/Home/Tablet/04.2024-WebPielihueso-Img-Home-Tablet-1.jpg";
import testImageMobile from "../../assets/images/Home/Mobile/04.2024-WebPielihueso-Img-Home-Mobile-1.jpg";

import "./home.scss";

const Home = () => {
  return (
    <>
      <Layout>
        <img
          className="home__image"
          src={testImageMobile}
          alt=""
          srcSet={`${testImageMobile} 750w, ${testImageTablet} 1728w, ${testImageDesktop} 2880w`}
        />
      </Layout>
    </>
  );
};

export default Home;
