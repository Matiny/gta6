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
            <ul>
              <li>
                <p><i>Click on an app to open it. Use the phone's Home button to close it.</i></p>
              </li>
              <li>
                <p>The in-game phone can bring out some game changing features, but it takes too long to use.</p>
              </li>
              <li>
                <p>The phone has too many menus in some cases, and not enough in others.</p>
              </li>
              <li>
                <p>I propose much simpler apps which reduce the amount of menu clutter, adding in features, all in an easy to use interface.</p>
              </li>
            </ul>
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
