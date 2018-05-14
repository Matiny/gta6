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
import logo from './images/pngs/vice-logo.png';
import phone from './images/pngs/phone.png';
import bodies from './images/pngs/bodies.png';
import weapons from './images/pngs/weapons.png';
import beauty from './images/pngs/beauty.png';
import hud from './images/pngs/hud.png';
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
        <img src={title} className= {"title mobile-no " + this.state.notRadio} />

        <Radio radioClass={'radio ' + this.state.radioVisible} />
        <Slides slidesClass={'mobile-no ' + this.state.slidesVisible}/>

        { this.state.whichCategory === "phone"?
        <Phone close={() => {this.clickIcon("");
          this.mobileBg(Math.floor(Math.random() * 6) + 1)}} />
        :this.state.whichCategory === "bodies"?
        <Bodies close={() => {this.clickIcon("")}} />
        :this.state.whichCategory === "beauty"?
        <Beauty close={() => {this.clickIcon("")}} />
        :this.state.whichCategory === "weapons"?
        <Weapons close={() => {this.clickIcon("")}} />
        :this.state.whichCategory === "ui"?
        <UI close={() => {this.clickIcon("")}} />
        :this.state.whichCategory === "misc"?
        <Misc close={() => {this.clickIcon("")}} />
        :null }

        <section className="thumbs mobile-no">
          <img src={logo} alt="" className={"logo mobile-no " + this.state.notRadio}/>

          <div className= {"text " + this.state.notRadio}>
            <p>GTA Online can be a confusing game, mostly due to its unhelpful UI/UX design.
            In certain areas, players have to find creative ways to figure out the game.
            The purpose of this site is to introduce a number of potential UI/UX changes
            to help create a smoother gameplay experience.
            Click or tap an icon to see more info.
            <br />
            <em className="mobile-no">(P.S. Hold Q to access the radio)</em>

          </p>

        </div>

        <ul className= {"pattern " + this.state.notRadio}>

          <li className="hexagon">
            <span className="inside"><img src={phone} alt=""
              onClick={() => {this.clickIcon("phone")}}
            /></span>
          </li>
          <li className="hexagon">
            <span className="inside"><img src={bodies} alt="" onClick={() => {this.clickIcon("bodies")}}/></span>
          </li>
          <li className="hexagon">
            <span className="inside"><img src={weapons} alt="" onClick={() => {this.clickIcon("weapons")}}/></span>
          </li>
          <li className="hexagon">
            <span className="inside"><img src={beauty} alt="" onClick={() => {this.clickIcon("beauty")}}/></span>
          </li>
          <li className="hexagon">
            <span className="inside"><img src={hud} alt="" onClick={() => {this.clickIcon("ui")}}/></span>
          </li>
          <li className="hexagon">
            <span className="inside"><img src={misc} alt="" onClick={() => {this.clickIcon("misc")}}/></span>
          </li>

        </ul>
      </section>

      <section className={`mobile-menu ${mobileYesOrNo} ${menu}`}>
        <img src={require("./images/pngs/vice-logo.png")} />
        <div onClick={() => {
          this.clickIcon("phone");
          this.mobileBg("");
        }}><p>PHONE</p></div>
        <div>WEAPONS</div>
        <div>BEAUTY</div>
        <div>BODIES</div>
        <div>HUD</div>
        <div>MISC.</div>
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
