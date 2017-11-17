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
         whichCategory: ""
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

   clickIcon = (whichCategory) => {
     this.setState({whichCategory});
   }


  render() {
    return (
      <div className="content">
         <img src={title} className= {"title mobile-no " + this.state.notRadio} />

         <Radio radioClass={'radio ' + this.state.radioVisible} />
         <Slides slidesClass={'mobile-no ' + this.state.slidesVisible}/>

         { this.state.whichCategory === "phone"?
         <Phone close={() => {this.clickIcon("")}} />
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

      </div>
    );
  }
}
