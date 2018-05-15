import React from 'react'

//Bodies

import back from '../images/back.svg'

export default class Bodies extends React.Component {
   constructor() {
      super();

      this.state = {
         menuChoice: "",
         category: "athletic",
         gender: "male"
      }
   }

   setMenuState = (menuChoice) => {
     this.setState({menuChoice});
   }

   setGender = (gender) => {
     this.setState({gender});
   }

   setCategory = (category) => {
     this.setState({category});
   }

   render() {
     //The image changes based off state
     let path = this.state.category + '-' + this.state.gender + '.svg';
     //Set the position of the back backButton
     let backTop;
     let submenu;
     if (window.innerWidth <= 900) {
       backTop = this.state.menuChoice == "one" ? "20%"
       :this.state.menuChoice == "two" || this.state.menuChoice == "three" ? "35%" : "0%";
       submenu = this.state.menuChoice !== "" ?
       {opacity: 0, visibility: "hidden"} : {opacity: 1};
     }
     //Keep track of which submenu has been picked
     let menu1 = this.state.menuChoice == "one" ? " pickmenu":"";
     let menu2 = this.state.menuChoice == "two" ? " pickmenu":"";
     let menu3 = this.state.menuChoice == "three" ? " pickmenu":"";
     let backButton = this.state.menuChoice != "" ? " pickmenuback": ""

      return(
         <div className="base-content">
            <div className="close-button" onClick={this.props.close}></div>
            <div className="text">
               <p>
                  By default, this game has a cool variety of body types in the game. However, you can't pick them. The men look normal enough, but the women look bizarre. Also, the facial/ethnicity selection involves cycling through a bunch of different faces for both the "mother & father" of your character. It's to a point that you have to watch tutorials on how to make a good looking character.

                  <br />
                  <br />

                  Instead, one should be able to pick from a default set of bodies and faces, and then go on to fine tune additional details.

               </p>
            </div>

            <section className="interactive">

               <ul className="menu" style={submenu}>
                  <li className="gen"
                    onClick={() => {this.setMenuState("one")}}
                    ><p>GENDER</p></li>
                  <li className="bod"
                    onClick={() => {this.setMenuState("two")}}
                    ><p>PHYSIQUE</p></li>
                  <li className="eth"
                    onClick={() => {this.setMenuState("three")}}
                    ><p>ETHNICITY</p></li>
               </ul>

               <ul className={"gen-menu" + menu1}>
                  <li onClick={(e) => {this.setGender(e.target.textContent)}}>Male</li>
                  <li onClick={(e) => {this.setGender(e.target.textContent)}}>Female</li>
               </ul>

               <ul className={"bod-menu" + menu2}>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Average</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Athletic</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Ripped</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Chubby</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Skinny</li>
               </ul>

               <ul className={"eth-menu" + menu3}>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Asian</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Black</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Hispanic</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >White</li>
                  <li
                    onClick={(e) => {this.setCategory(e.target.textContent)}}
                    >Arab</li>
               </ul>

               <div className={"back" + backButton}
                 onClick={() => {this.setMenuState("")}}
                 style={{top: backTop}}>
                  <img src={back} alt="" />
               </div>
               <img src={require('../images/bodies/' + path.toLowerCase())} alt="" className="image" />

            </section>
         </div>
      )
   }

}
