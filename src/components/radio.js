import React from 'react';
//Images
import rock from '../images/pngs/rock.png';
import none from '../images/pngs/none.png';
import blue from '../images/pngs/blue.png';
import flash from '../images/pngs/flash.png';
import estim from '../images/pngs/estim.png';
import urban from '../images/pngs/urban.png';
import intl from '../images/pngs/intl.png';
//Music
import puff from '../music/come.mp3';
import clara from '../music/nouse.mp3';
import desiigner from '../music/panda.mp3';
import latin from '../music/rgtn.mp3';
import justin from '../music/you.mp3';
import beenie from '../music/girls.mp3';

export default class Radio extends React.Component {

   constructor () {
      super();

      this.state = {
         audiosrc: "",
         station: "",
         name: "Radio",
         artist: "Off"
      }
   }

   cutTheMusic = () => {
      this.setState({
         audiosrc: "",
         station: "",
         name: "Radio",
         artist: "Off"
      });

      this.playmusic.pause();
   }

   rockStation = () => {
      this.setState({
         audiosrc: puff,
         station: "Vice Rock Radio",
         name: "COME WITH ME",
         artist: "Puff Daddy & Jimmy Page"
      });

      this.playmusic.load();
      this.playmusic.play();
   }

   jazzStation = () => {
      this.setState({
         audiosrc: clara,
         station: "International FM",
         name: "NO USE",
         artist: "Jazzanova & Clara Hill"
      });

      this.playmusic.load();
      this.playmusic.play();
   }

   rapStation = () => {
      this.setState({
         audiosrc: desiigner,
         station: "Urban Beach Radio",
         name: "PANDA",
         artist: "Desiigner"
      });

      this.playmusic.load();
      this.playmusic.play();
   }

   latinStation = () => {
      this.setState({
         audiosrc: latin,
         station: "Estimulación FM",
         name: "REGGAETON TRACK",
         artist: "Some guy on YouTube"
      });

      this.playmusic.load();
      this.playmusic.play();
   }

   popStation = () => {
      this.setState({
         audiosrc: justin,
         station: "Flashpoint FM",
         name: "WHAT DO YOU MEAN",
         artist: "My Man Bieber"
      });

      this.playmusic.load();
      this.playmusic.play();
   }

   reggaeStation = () => {
      this.setState({
         audiosrc: beenie,
         station: "Blue Crest Radio",
         name: "GIRLS DEM SUGAR",
         artist: "Beenie Man & Mya"
      });

      this.playmusic.load();
      this.playmusic.play();
   }

   render() {
      return (
         <section className={this.props.radioClass}>

         <div className="septagon">
            <div className="labels">
               <p>
                  <em>{this.state.station}</em>
               </p>
               <p>{this.state.name}</p>
               <p>{this.state.artist}</p>
            </div>
            <span className="deg40" onClick={this.rockStation}>
               <img src={rock} alt="" />
            </span>
            <span className="deg90" onClick={this.cutTheMusic}>
               <img src={none} alt="" />
            </span>
            <span className="deg140" onClick={this.reggaeStation}>
               <img src={blue} alt="" />
            </span>
            <span className="deg195" onClick={this.popStation}>
               <img src={flash} alt="" />
            </span>
            <span className="deg245" onClick={this.latinStation}>
               <img src={estim} alt="" />
            </span>
            <span className="deg295" onClick={this.rapStation}>
               <img src={urban} alt="" />
            </span>
            <span className="deg345" onClick={this.jazzStation}>
               <img src={intl} alt="" />
            </span>

            <audio id="playmusic" preload="none" ref={(x) => { this.playmusic = x; }}>
               <source type="audio/mpeg" src={this.state.audiosrc} />
            </audio>
         </div>
      </section>
      )
   }
}
