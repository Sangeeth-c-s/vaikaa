import Header from './assets/images/Header.png';
import Banner from './assets/images/Vaikaa Banner Photo.png';
import secondBanner from './assets/images/secondBanner.png';
import Info from './assets/images/Info.png';
import Products from './assets/images/products.png';
import viewAll from './assets/images/viewAll.png';
import Ingredients from './assets/images/ingredients(original).png';
import Review from './assets/images/Reviews.png';
import Product from './assets/images/product.png';
import Image5 from './assets/images/scrnli_9_21_2023_5-04-45 PM.png';

// import Headers from './Header';

function App() {
  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <>
      <img
        src={Header}
        style={{ ...imageStyle, boxShadow: '10px 10px 8px #888888' }}
        alt="logo"
      />
      <img src={Banner} style={imageStyle} alt="logo" />
      <img
        src={Products}
        style={{ ...imageStyle, marginBottom: '3%' }}
        alt="logo"
      />
      <img src={Info} style={imageStyle} alt="logo" />
      <img
        src={Products}
        style={{ ...imageStyle, marginBottom: '3%' }}
        alt="logo"
      />
      <img src={viewAll} style={imageStyle} alt="logo" />
      <img
        src={Product}
        style={{ ...imageStyle, marginTop: '3%' }}
        alt="logo"
      />
      <img src={Ingredients} style={imageStyle} alt="logo" />
      <img src={Review} style={imageStyle} alt="logo" />
      <img src={secondBanner} style={imageStyle} alt="logo" />
      <img src={Image5} style={imageStyle} alt="logo" />
      {/* <Headers /> */}
    </>
  );
}

export default App;
