import React from 'react';

//SVGs
import batt from '../images/phone/batt.svg';
import biker from '../images/phone/bikers.svg';
import find from '../images/phone/find.svg';
import job from '../images/phone/job.svg';
import lamar from '../images/phone/lamar.svg';
import lester from '../images/phone/lester.svg';
import merry from '../images/phone/merry.svg';
import peg from '../images/phone/peg.svg';
import phone from '../images/phone/phone.svg';
import serv from '../images/phone/serv.svg';
import wifi from '../images/phone/wifi.svg';
import www from '../images/phone/www.svg';

//Jpegs
import bikers from '../images/phone/bikers.jpg';
import crew from '../images/phone/crew.jpg';
import joblist from '../images/phone/joblist.jpg';
import lamars from '../images/phone/lamar.jpg';
import lesters from '../images/phone/lester.jpg';
import loading from '../images/phone/loading.jpg';
import merrys from '../images/phone/merry.jpg';
import pega from '../images/phone/pega.jpg';
import servs from '../images/phone/serv.jpg';

export default class Phone extends React.Component {

   constructor() {
      super();

      this.state = {
         dateClass: new Date().toLocaleTimeString(),
         imgPath: loading
      }
   }

   setTime = () => {
      this.setState({
         dateClass: new Date().toLocaleTimeString()
      })
   }

   internet = () => {
      window.open("http://www.google.com");
   }

   setImgPath = (imgPath) => {
     this.setState({imgPath});
   }

   componentDidMount() {
      this.phoneClock = setInterval(
         () => this.setTime(), 10000
      )
   }

   componentWillUnmount() {
    clearInterval(this.phoneClock);
  }

   render() {

      let isAppVisible = this.state.imgPath == loading?"":" visible";
      let areIconsVisible = this.state.imgPath == loading?"block":"none";

      return(
         <div className="base-content">
            <div className="close-button" onClick={this.props.close}></div>
            <div className="text">
               <p>The game's phone can bring out some game changing features, even though actually using the phone can get you killed. This is because the Phone's features might take too long to access. In the meantime, other players are taking aim at you. Some of the issues with the phone include too many
               submenu items (Contacts), the fact that it can (and will) interrupt what you're doing, and "pre-scripted load times" as the phone calls someone.
               As you click back and forth from the apps to the phone's Home button, you'll see that I propose very straightforward options to enhance & simplify the game's
               phone.
               <br />
               <br />
               For example, if you need to find a set of players to play with, you can deal with the randomness of online matchmaking where players often have
               all types of motives. You can also be more specific with the exact challenge and money details, but you have to go on reddit or another site to do that.
               Considering that the game is already online, why isn't there a Find a Crew app that allows you to find people within specific contexts.
               <br />
               <em>(P.S. The home button on the phone is clickable)</em>
               </p>
            </div>

            <section className="screen">
               <img src={phone} alt="" className="phone-svg"/>
               <img src={this.state.imgPath} alt="" className={'app' + isAppVisible}/>
               <div className="row0">
                  <img src={batt} alt="" className="icon1" />
                  <img src={wifi} alt="" className="icon2" />
                  <p className="clock">{
                     this.state.dateClass.length == 10?
                     this.state.dateClass.slice(0,4) + this.state.dateClass.slice(7):
                     this.state.dateClass.slice(0,5) + this.state.dateClass.slice(8)

                  }</p>
                  <p className="day">{
                     new Date().getDay() == 0?
                     "Sun": new Date().getDay() == 1?
                     "Mon": new Date().getDay() == 2?
                     "Tues": new Date().getDay() == 3?
                     "Wed": new Date().getDay() == 4?
                     "Thurs": new Date().getDay() == 5?
                     "Fri":"Sat"
                  }</p>
               </div>

               <div className="row1" style={{display: areIconsVisible}}>
                  <img src={job} alt="" id="job" onClick={
                    () => {this.setImgPath(joblist)}} />
                  <img src={find} alt="" id="find" onClick={
                    () => {this.setImgPath(crew)}}/>
                  <img src={www} alt="" id="www" onClick={this.internet}/>
               </div>
               <div className="row2" style={{display: areIconsVisible}}>
                  <img src={serv} alt="" id="serv" onClick={
                    () => {this.setImgPath(servs)}}/>
                  <img src={biker} alt="" id="bikers" onClick={
                    () => {this.setImgPath(bikers)}}/>
                  <img src={merry} alt="" id="merry" onClick={
                    () => {this.setImgPath(merrys)}}/>
               </div>
               <div className="row3" style={{display: areIconsVisible}}>
                  <img src={peg} alt="" id="peg" onClick={
                    () => {this.setImgPath(pega)}}/>
                  <img src={lamar} alt="" id="lamar" onClick={
                    () => {this.setImgPath(lamars)}}/>
                  <img src={lester} alt="" id="lester" onClick={
                    () => {this.setImgPath(lesters)}}/>
               </div>
               <span id="close" onClick={() => {this.setImgPath(loading)}}></span>
            </section>
         </div>
      )
   }
}
