import './App.css'
import {useState} from 'react';

import logo from './assets/images/logo.svg'
import mainImage from './assets/images/image-web-3-desktop.jpg'
import component1Image from './assets/images/image-retro-pcs.jpg'
import component2Image from './assets/images/image-top-laptops.jpg'
import component3Image from './assets/images/image-gaming-growth.jpg'
import navRightImage from './assets/images/icon-menu.svg'
import navRightCloseImage from './assets/images/icon-menu-close.svg'

export default function App() {

  const [navImage, setNavImage] = useState(navRightImage);

  function changeNavImage() {
    if(navImage === navRightImage){
      setNavImage(navRightCloseImage);
    }else{
      setNavImage(navRightImage);
    }
  }

  function SecondContentComponent({children, index, title, imagePath, altText}) {
    return (
      <div className="second-content-component">
        <div className="component-image">
          <img src={imagePath} alt={altText} />
        </div>
        <div className="component-content">
          <div className="component-counter">
            0{index}
          </div>
          <div className="component-title">
            {title}
          </div>
          <div className="component-data">
            {children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="site">
      <nav className="hnav">
        <div className="hnav-left">
          <img src={logo} alt="Logo image" />
        </div>
        <div className="hnav-right">
            <ul className="hnav-right-content">
              <li><a href="#">Home</a></li>
              <li><a href="#">New</a></li>
              <li><a href="#">Popular</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Categories</a></li>
            </ul>
          </div>
          <div class="mobile-nav-wrapper">
            <div className="hnav-right-mobile" style={navImage === navRightCloseImage? {display: 'block', position:'fixed', zIndex:2, cursor:'pointer', right:0, marginRight:'1rem'}:{}}>
              <div className="hnav-right-img" onClick={changeNavImage}>
                <img src={navImage} alt="Nav Bar Open Image" />
              </div>
            </div>
          </div>
        {navImage === navRightCloseImage? 
          <div className="vnav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">New</a></li>
              <li><a href="#">Popular</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Categories</a></li>
            </ul>
          </div>
        :
          <></>
        }
      </nav>
      <main>
        <section className="first">
          <div className="first-left">
            <div className="first-left-content1">
              <img src={mainImage} alt="Image showing puzzles" />
            </div>
            <div className="first-left-content2">
              <div className="flc2-left">
                <h1>
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div className="flc2-right">
                <p>
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?
                </p>
                <button>READ MORE</button>
              </div>
            </div>

          </div>
          <div className="first-right">
            <h1>New</h1>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>

            <hr />

            <h2>The Downsides of AI Artistry</h2>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>

            <hr />

            <h2>Is VC Funding Drying Up?</h2>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>

        </section>
        <section className="second">
          <SecondContentComponent imagePath={component1Image} altText="Retro Computer Image" index="1" title="Reviving Retro PCs">
            What happens when old PCs are given modern upgrades?
          </SecondContentComponent>
          <SecondContentComponent imagePath={component2Image} altText="Top Laptops Image" index="2" title="Top 10 Laptops of 2022">
            Our best picks for various needs and budgets.
          </SecondContentComponent>
          <SecondContentComponent imagePath={component3Image} altText="Gaming Growth Image" index="3" title="The Growth of Gaming">
            How the pandemic has sparked fresh opportunities.
          </SecondContentComponent>
        </section>
      </main>
    </div>
  );
}