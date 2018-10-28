import React from 'react';

import arrow from '../images/ui/arrow-up.svg'
export default class UI extends React.Component {
constructor() {
  super();

  this.state = {
    menuPrimary: "contracted",
    category: "chars",
    name1: "Offense",
    name2: "Defense",
    name3: "Agility",
    image: "primero",
    num1: 50,
    num2: 25,
    num3: 10,
    bar1: "100%",
    bar2: "50%",
    bar3: "20%"
  }
}

showMenu = () => {
  this.state.menuPrimary == "contracted"?
  this.setState({ menuPrimary: "expanded"})
  :this.setState({ menuPrimary: "contracted"});
}

render() {
  //Classes

  let graphClass = this.state.category == "chars"?
  "characters" : "carsguns";

  let imageClass = this.state.category == "chars"?
  "char" : "car";

  let highlight1 = this.state.category == "chars"?
  "chosen":"";

  let highlight2 = this.state.category == "guns"?
  "chosen":"";

  let highlight3 = this.state.category == "cars"?
  "chosen":"";

  let arrowUpDown = this.state.menuPrimary == "contracted" ? "arrow-down.svg":"arrow-up.svg";

  let menuHeight = this.state.menuPrimary == "expanded" ? "40%":"10%";

  let menuVisible = this.state.menuPrimary == "expanded"? "":"invisible";

  let menuOpacity = this.state.menuPrimary == "expanded"? 0.10 : 1;

  let chars = {
    category: "chars",
    name1: "Offense",
    name2: "Defense",
    name3: "Agility",
    image: "primero",
    num1: 50,
    num2: 25,
    num3: 10,
    bar1: "100%",
    bar2: "50%",
    bar3: "20%",
    menuPrimary: "contracted"
  }

  let guns = {
    category: "guns",
    name1: "Fire Rate",
    name2: "Damage",
    name3: "Capacity",
    image: "rpg",
    num1: 1,
    num2: 100,
    num3: 1,
    bar1: "10%",
    bar2: "100%",
    bar3: "5%",
    menuPrimary: "contracted"
  }

  let cars = {
    category: "cars",
    name1: "0-60 mph",
    name2: "Top speed",
    name3: "Handling",
    image: "sabre",
    num1: "6s",
    num2: 116,
    num3: 4,
    bar1: "28%",
    bar2: "53%",
    bar3: "80%",
    menuPrimary: "contracted"
  }

  //Characters

  let primero = {
    image: "primero",
    num1: 50,
    num2: 25,
    num3: 10,
    bar1: "100%",
    bar2: "50%",
    bar3: "20%"
  }

  let segundo = {
    image: "segundo",
    num1: 25,
    num2: 10,
    num3: 50,
    bar1: "50%",
    bar2: "20%",
    bar3: "100%"
  }

  let gorilla = {
    image: "gorilla",
    num1: 10,
    num2: 50,
    num3: 25,
    bar1: "20%",
    bar2: "100%",
    bar3: "50%"
  }

  //Guns

  let rpg = {
    image: "rpg",
    num1: 1,
    num2: 100,
    num3: 1,
    bar1: "10%",
    bar2: "100%",
    bar3: "5%",
  }

  let g36 = {
    image: "g36",
    num1: 10,
    num2: 15,
    num3: 30,
    bar1: "50%",
    bar2: "15%",
    bar3: "60%",
  }

  let eagle = {
    image: "eagle",
    num1: 3,
    num2: 50,
    num3: 7,
    bar1: "20%",
    bar2: "50%",
    bar3: "30%",
  }

  //Cars

  let sabre = {
    image: "sabre",
    num1: "6s",
    num2: 116,
    num3: 4,
    bar1: "28%",
    bar2: "53%",
    bar3: "80%"
  }

  let infernus = {
    image: "infernus",
    num1: "2.7s",
    num2: 215,
    num3: 2,
    bar1: "75%",
    bar2: "100%",
    bar3: "40%"
  }

  let sentinel = {
    image: "sentinel",
    num1: "4.2s",
    num2: 155,
    num3: 3,
    bar1: "54%",
    bar2: "72%",
    bar3: "60%"
  }

  return(
    <div className="base-content">
        <div className="close-button" onClick={this.props.close}></div>
      <div className="text">
         <ul>
           <li>
             <p>The UI of the game doesn't do a good job displaying information.</p>
           </li>
           <li>
             <p>Sometimes the information is incorrect, other times it has too much or too little.</p>
           </li>
           <li>
             <p>I came up with a series of stats that display the information in a concise, easy to understand manner.</p>
           </li>
         </ul>
      </div>
      <section className="offset">
         <img src=
           {require("../images/ui/" + this.state.category + "/" + this.state.image + ".svg")}
           alt="" className={imageClass} style={{opacity: menuOpacity}} />
         <div className="contracted" style={{height: menuHeight}}>
            <div className="choose" onClick={this.showMenu}>
               <p>Choose a Category</p>
               <img src={require("../images/ui/" + arrowUpDown)} alt="" />
            </div>
            <ul className={"expanded " + menuVisible}>
               <li onClick={() => {this.setState(chars)}}
                 className={"item1 " + highlight1}>
                  <p>Characters</p>
               </li>
               <li onClick={() => {this.setState(guns)}}
                 className={"item2 " + highlight2}>
                  <p>Weapons</p>
               </li>
               <li onClick={() => {this.setState(cars)}}
                 className={"item3 " + highlight3}>
                  <p>Vehicles</p>
               </li>
            </ul>
         </div>
         <div className="prev" style={{opacity: menuOpacity}}
           onClick={
           this.state.image == "primero"? () => {this.setState(gorilla)} :
           this.state.image == "segundo"? () => {this.setState(primero)} :
           this.state.image == "gorilla"? () => {this.setState(segundo)} :
           this.state.image == "rpg"? () => {this.setState(eagle)} :
           this.state.image == "g36"? () => {this.setState(rpg)} :
           this.state.image == "eagle"? () => {this.setState(g36)} :
           this.state.image == "sabre"? () => {this.setState(sentinel)} :
           this.state.image == "infernus"? () => {this.setState(sabre)} :
           () => {this.setState(infernus)}
         }>
            <img src={arrow} alt="" />
         </div>
         <div className="next" style={{opacity: menuOpacity}}
           onClick={
           this.state.image == "primero"? () => {this.setState(segundo)} :
           this.state.image == "segundo"? () => {this.setState(gorilla)} :
           this.state.image == "gorilla"? () => {this.setState(primero)} :
           this.state.image == "rpg"? () => {this.setState(g36)} :
           this.state.image == "g36"? () => {this.setState(eagle)} :
           this.state.image == "eagle"? () => {this.setState(rpg)} :
           this.state.image == "sabre"? () => {this.setState(infernus)} :
           this.state.image == "infernus"? () => {this.setState(sentinel)} :
           () => {this.setState(sabre)}
         }>
            <img src={arrow} alt="" />
         </div>
         <ul className={"graph " + graphClass} style={{opacity: menuOpacity}}>
            <li className="row1">
               <p className="name">{this.state.name1}</p>
               <div className="amount">
                  <div className="bar" style={{width: this.state.bar1}}></div>
               </div>
               <p className="number">{this.state.num1}</p>
            </li>
            <li className="row2">
               <p className="name">{this.state.name2}</p>
               <div className="amount">
                  <div className="bar" style={{width: this.state.bar2}}></div>
               </div>
               <p className="number">{this.state.num2}</p>
            </li>
            <li className="row3">
               <p className="name">{this.state.name3}</p>
               <div className="amount">
                  <div className="bar" style={{width: this.state.bar3}}></div>
               </div>
               <p className="number">{this.state.num3}</p>
            </li>
         </ul>
      </section>
   </div>
  )
}
}
