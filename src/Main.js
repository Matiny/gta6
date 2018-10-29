import React, { Component } from 'react';
import './css/main.min.css';
import './css/phone.min.css';
import './css/bodies.min.css';
import './css/beauty.min.css';
import './css/weapons.min.css';
import './css/ui.min.css';
import './css/font.css';

//Images

import title from './images/svgs/text.svg';
import arrow from './images/down-arrow.svg';
import logo from './images/pngs/vice-logo.png';
import phone from './images/pngs/phone.png';
import bodies from './images/pngs/bodies.png';
import weapons from './images/pngs/weapons.png';
import beauty from './images/pngs/beauty.png';
import ui from './images/pngs/ui.png';
import misc from './images/pngs/misc.png';

//Components

import Slides from './components/slides';
import Radio from './components/radio';
import Phone from './components/phone';
import Bodies from './components/bodies';
import Beauty from './components/beauty';
import Weapons from './components/weapons';
import UI from './components/ui';
import Misc from './components/misc';

export default class Main extends Component {

  constructor () {
    super();
    this.state = {
      radioVisible: "invisible",
      slidesVisible: "slides",
      notRadio: "",
      whichCategory: "",
      mobileMenu: false,
      number: Math.floor(Math.random() * 6) + 1
    }
  }

  handleKeyDown = window.addEventListener("keydown", (event) => {
    if (event.key === "q" || event.key === "Q") {
      this.setState({
        radioVisible: "",
        slidesVisible: "blurfx",
        notRadio: "invisible"
      })
    }
  });

  handleKeyUp = window.addEventListener("keyup", (event) => {
    if (event.key === "q" || event.key === "Q") {
      this.setState({
        radioVisible: "invisible",
        slidesVisible: "slides",
        notRadio: ""
      })
    }

  });

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      mobileMenu: !prevState.mobileMenu
    }));
    console.log(this.state.mobileMenu)
  }

  clickIcon = whichCategory => {
    this.setState({whichCategory});
  }

  closeView = () => {
    this.setState({
      whichCategory: "",
      number: Math.floor(Math.random() * 6) + 1
    })
  }

  mobileBg = number => this.setState({number});


  render() {
    //Toggle the mobile menus & content
    const menu = this.state.mobileMenu ? "show-mobile-menu" : "";
    const content = this.state.mobileMenu ? "push-mobile-content" : "";
    //Remove content if component is tapped
    const mobileYesOrNo = this.state.whichCategory === "" ? "mobile-yes" : "mobile-no";
    //Random bg image on refresh
    const styles = {
      backgroundImage: `url(${require(`./images/bgs/${this.state.number}mobile.jpg`)})`,
      backgroundSize: "cover"
    }
    return (
      <div className="content" style={styles}>
        <img src={title} className= {"title mobile-no " + this.state.notRadio} alt="title text" />

        <div className={"arrow mobile-no " + this.state.notRadio}>
        <img src={arrow} alt="downwards arrow" />
        </div>


        <Radio radioClass={'radio ' + this.state.radioVisible} />
        <Slides slidesClass={'mobile-no ' + this.state.slidesVisible}/>

        { this.state.whichCategory === "phone"?
        <Phone close={() => {this.closeView()}} />
        :this.state.whichCategory === "bodies"?
        <Bodies close={() => {this.closeView()}} />
        :this.state.whichCategory === "beauty"?
        <Beauty close={() => {this.closeView()}} />
        :this.state.whichCategory === "weapons"?
        <Weapons close={() => {this.closeView()}} />
        :this.state.whichCategory === "ui"?
        <UI close={() => {this.closeView()}} />
        :this.state.whichCategory === "misc"?
        <Misc close={() => {this.closeView()}} />
        :null }

        <section className="thumbs mobile-no">
        <div className={"logo mobile-no " + this.state.notRadio}>
          <img src={logo} alt="" />
        </div>


          <div className= {"home-text " + this.state.notRadio}>
            <ul>
              <li>
                <p>	• GTA Online isn't user friendly. This concept site showscases interactive UI/UX improvements players would like to see.</p>
              </li>
              <li>
                <p>	• Click the icons to see more info.</p>
              </li>
              <li>
                <p><i>• Press and hold Q to access the radio.</i></p>
              </li>
            </ul>
          </div>

        <ul className={"links " + this.state.notRadio}>
          <li>
            <img src={phone} alt="" onClick={() => {this.clickIcon("phone")}} />
          </li>
          <li>
            <img src={beauty} alt="" onClick={() => {this.clickIcon("beauty")}}/>
          </li>
          <li>
            <img src={weapons} alt="" onClick={() => {this.clickIcon("weapons")}}/>
          </li>
        </ul>

        <ul className={"links " + this.state.notRadio}>
          <li>
            <img src={bodies} alt="" onClick={() => {this.clickIcon("bodies")}}/>
          </li>
          <li>
            <img src={ui} alt="" onClick={() => {this.clickIcon("ui")}}/>
          </li>
          <li>
            <img src={misc} alt="" onClick={() => {this.clickIcon("misc")}}/>
          </li>
        </ul>
      </section>

      <section className={`mobile-menu ${mobileYesOrNo} ${menu}`}>
        <img src={require("./images/pngs/vice-logo.png")} />
        <div onClick={() => {
          this.clickIcon("phone");
          this.mobileBg("");
        }}>PHONE</div>
        <div onClick={() => {
          this.clickIcon("beauty");
          this.mobileBg("");
        }}>FASHION</div>
        <div onClick={() => {
          this.clickIcon("weapons");
          this.mobileBg("");
        }}>WEAPONS</div>
        <div onClick={() => {
          this.clickIcon("bodies");
          this.mobileBg("");
        }}>BODIES</div>
        <div onClick={() => {
          this.clickIcon("ui");
          this.mobileBg("");
        }}>UI</div>
        <div onClick={() => {
          this.clickIcon("misc");
          this.mobileBg("");
        }}>MISC.</div>
      </section>

      <section className={`mobile-content ${mobileYesOrNo} ${content}`}>

        <img src={require("./images/svgs/menu.svg")} alt="" className="menu-button" onClick={this.toggleMobileMenu}/>
        <img src={require("./images/svgs/mobile-text.svg")} alt="" className="mobile-title" />
        <p className="mobile-desc">
          Welcome to the mobile version of my GTA themed site. The purpose of this site is to talk about the problems with the game's UI/UX, and some potential solutions that I propose. Please be sure to visit the desktop verison of the site, and be blown away at my awesome design and code.
          <br />
          (P.S. The background randomizes each time it loads)
        </p>
      </section>
    </div>
  );
}
}
