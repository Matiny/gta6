import React from 'react';

import back from '../images/back.svg'

export default class Beauty extends React.Component {
  constructor() {
    super();

    this.state = {
      hair: "Straight.png",
      top: "Vercetti.png",
      onepiece: "Mini Dress.png",
      topOption: "blank.png",
      shoes: "Zanotti.png",
      bottom: "Low Waist Jeans.png",
      bottomOption: "blank.png",
      menuChoice: "",
      dressDisplay: "none",
      topBotDisplay: "block",
      modelOrMenu: "model"
    }
  }

  pickOption = (val1, val2) => {
    this.setState({[val1]: val2});
  }

  jacket = () => {
    this.setState({
      topOption: this.state.topOption === "blank.png" ||
      this.state.topOption === "Cover Up.png"?
      "Jacket.png":"blank.png"
    })
  }

  coverup = () => {
    this.setState({
      topOption: this.state.topOption === "blank.png" ||
      this.state.topOption === "Jacket.png"?
      "Cover Up.png":"blank.png"
    })
  }

  socks = () => {
    this.setState({
      bottomOption: this.state.bottomOption === "blank.png" ||
      this.state.bottomOption === "Stockings.png"?
      "Knee Socks.png":"blank.png"
    })
  }

  stocks = () => {
    this.setState({
      bottomOption: this.state.bottomOption === "blank.png" ||
      this.state.bottomOption === "Knee Socks.png"?
      "Stockings.png":"blank.png"
    })
  }

  displayDress = (val1, val2) => {
    this.setState({
      [val1]: val2,
      dressDisplay: "block",
      topBotDisplay: "none"
    })
  }

  displayTopBot = (val1, val2) => {
    this.setState({
      [val1]: val2,
      dressDisplay: "none",
      topBotDisplay: "block"
    })
  }

  goBack = () => {
    this.setState({menuChoice: ""});
  }

  mobileMenuTap = () => {
    if (window.innerWidth <= 900) {
      this.setState({modelOrMenu: "menu"});
    }
  }

  mobileMenuBack = () => {
    this.setState({modelOrMenu: "model"});
  }

  render() {
    //Mobile menu variables

    let invisible = this.state.modelOrMenu === "model" && window.innerWidth <= 900 ?
    " invisible" : "";

    let semiVisible = this.state.modelOrMenu === "menu" && window.innerWidth <= 900 ?
    " semi-visible" : "";

    //Only show main menu if user is not in submenu
    let menuDisplay = this.state.menuChoice === "" ?
    "block":"none";

    //Button visibility for layering options
    let jacketOpacity = this.state.topOption === "blank.png" ||
    this.state.topOption === "Cover Up.png"?
    0.5 : 1;

    let coverOpacity = this.state.topOption === "blank.png" ||
    this.state.topOption === "Jacket.png"?
    0.5 : 1;

    let sockOpacity = this.state.bottomOption === "blank.png" ||
    this.state.bottomOption === "Stockings.png"?
    0.5 : 1;

    let stockOpacity = this.state.bottomOption === "blank.png" ||
    this.state.bottomOption === "Knee Socks.png"?
    0.5 : 1;

    return(
      <div className="base-content">
          <div className="close-button" onClick={this.props.close}></div>
          <div className="text">
            <p>
              While I was designing the wallpapers for this site, my plan was to use clothing from the game. However, I immediately spotted a design flaw with the UX: limited options for female clothing (and hair). After investigating, other players feel that the overall beauty options are lacking in some very basic areas, thus making players feel like they're forcing outfits to work. Interestingly, many of the styles that players want already exist in-game, but are not available to actually use. Some of the existent styles are normal long hairstyles, good looking dresses, and layering options such as boots with jeans. Additional touches I added include more swimsuits (the game only has 1 set), more creative crop tops, and some trendy shoes.
            </p>
            <p className="mobile-yes"><b>Tap the model to get started.</b></p>
          </div>

        <section className={"menu-box" + invisible}>
           <nav className="item-group main"
             style={{display: menuDisplay}}>
              <div className="item one"
                onClick={() => {this.pickOption("menuChoice","hair")}}
                >HAIRSTYLES</div>
              <div className="item two"
                onClick={() => {this.pickOption("menuChoice","top")}}
                >TOPS</div>
              <div className="item three"
                onClick={() => {this.pickOption("menuChoice","onepiece")}}
                >1 PIECES</div>
              <div className="item four"
                onClick={() => {this.pickOption("menuChoice","highwaist")}}
                >HIGH WAIST</div>
              <div className="item five"
                onClick={() => {this.pickOption("menuChoice","lowwaist")}}
                >LOW WAIST</div>
              <div className="item six"
                onClick={() => {this.pickOption("menuChoice","shoes")}}
                >SHOES</div>
              <div className="item seven"
                onClick={() => {this.pickOption("menuChoice","swim")}}
                >SWIMWEAR</div>
              <div className="back mobile-yes" onClick={() => {
                this.mobileMenuBack();
              }}><img src={back} alt=""/></div>
           </nav>
           <div className="item-group group1"
             style={{marginLeft: this.state.menuChoice == "hair" ? 0 : "100%"}}>
              <div className="item"

                onClick={(event) => {this.pickOption("hair", event.currentTarget.textContent + ".png")}}

                >Straight</div>
              <div className="item"

                onClick={(event) => {this.pickOption("hair", event.currentTarget.textContent + ".png")}}

                >Half Bun</div>
              <div className="item"

                onClick={(event) => {this.pickOption("hair", event.currentTarget.textContent + ".png")}}

                >Fishtail</div>
              <div className="item"

                onClick={(event) => {this.pickOption("hair", event.currentTarget.textContent + ".png")}}

                >High Ponytail</div>
              <div className="item"

                onClick={(event) => {this.pickOption("hair", event.currentTarget.textContent + ".png")}}

                >Romantic</div>
              <div className="back"><img src={back} alt=""

              onClick={this.goBack}/></div>
           </div>

           <div className="item-group group2"
             style={{marginLeft: this.state.menuChoice == "top" ? 0 : "100%"}}>
             <div className="item"

               onClick={(event) => {this.displayTopBot("top", event.currentTarget.textContent + ".png")}}

               >Vercetti</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("top", event.currentTarget.textContent + ".png")}}

                >V Neck</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("top", event.currentTarget.textContent + ".png")}}

                >Crop Top 1</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("top", event.currentTarget.textContent + ".png")}}

                >Crop Top 2</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("top", event.currentTarget.textContent + ".png")}}

                >Tube Top</div>
              <figure className="item jacket"
                style={{opacity: jacketOpacity}}

                onClick={this.jacket}

                >Jacket</figure>
              <div className="back"><img src={back} alt=""
              onClick={this.goBack}/></div>
           </div>

           <div className="item-group group3"
             style={{marginLeft: this.state.menuChoice == "onepiece" ? 0 : "100%"}}>
              <div className="item"

                onClick={(event) => {this.displayDress("onepiece", event.currentTarget.textContent + ".png")}}

                >Midi Dress</div>
              <div className="item"

                onClick={(event) => {this.displayDress("onepiece", event.currentTarget.textContent + ".png")}}

                >Maxi Dress</div>

              <div className="item"

                onClick={(event) => {this.displayDress("onepiece", event.currentTarget.textContent + ".png")}}

                >Mini Dress</div>
              <div className="item"

                onClick={(event) => {this.displayDress("onepiece", event.currentTarget.textContent + ".png")}}

                >Basic Jumper</div>
              <div className="item"

                onClick={(event) => {this.displayDress("onepiece", event.currentTarget.textContent + ".png")}}

                >Kill Bill Jumper</div>
              <div className="item"

                onClick={(event) => {this.displayDress("onepiece", event.currentTarget.textContent + ".png")}}

                >Romper</div>

              <div className="back"><img src={back} alt=""
              onClick={this.goBack}/></div>
           </div>

           <div className="item-group group4"
             style={{marginLeft: this.state.menuChoice == "highwaist" ? 0 : "100%"}}>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >High Waist Jeans</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >Midi Skirt</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >Mini Skirt</div>

              <figure className="item stock"
                style={{opacity: stockOpacity}}
                onClick={this.stocks}
                >Stockings</figure>
              <figure className="item knee"
                style={{opacity: sockOpacity}}
                onClick={this.socks}
                >Knee Socks</figure>

              <div className="back"><img src={back} alt=""
              onClick={this.goBack}/></div>
           </div>

           <div className="item-group group5"
             style={{marginLeft: this.state.menuChoice == "lowwaist" ? 0 : "100%"}}>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >Low Waist Jeans</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >Yoga Pants</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >Shorts</div>

                <figure className="item stock"
                  style={{opacity: stockOpacity}}
                  onClick={this.stocks}
                  >Stockings</figure>
                <figure className="item knee"
                  style={{opacity: sockOpacity}}
                  onClick={this.socks}
                  >Knee Socks</figure>

              <div className="back"><img src={back} alt=""
              onClick={this.goBack}/></div>
           </div>

           <div className="item-group group6"
             style={{marginLeft: this.state.menuChoice == "shoes" ? 0 : "100%"}}>
              <div className="item"

                onClick={(event) => {this.pickOption("shoes", event.currentTarget.textContent + ".png")}}

                >Zanotti</div>
              <div className="item"

                onClick={(event) => {this.pickOption("shoes", event.currentTarget.textContent + ".png")}}

                >Ankle Strap</div>
              <div className="item"

                onClick={(event) => {this.pickOption("shoes", event.currentTarget.textContent + ".png")}}

                >Lace Ups</div>
              <div className="item"

                onClick={(event) => {this.pickOption("shoes", event.currentTarget.textContent + ".png")}}

                >Boots</div>
              <div className="item"

                onClick={(event) => {this.pickOption("shoes", event.currentTarget.textContent + ".png")}}

                >Gucci Slides</div>
              <div className="item"

                onClick={(event) => {this.pickOption("shoes", event.currentTarget.textContent + ".png")}}

                >Louboutin</div>
              <div className="back"><img src={back} alt=""
              onClick={this.goBack}/></div>
           </div>

           <div className="item-group group7"
             style={{marginLeft: this.state.menuChoice == "swim" ? 0 : "100%"}}>
              <div className="item"

                onClick={(event) => {this.displayTopBot("top", event.currentTarget.textContent + ".png")}}

                >Triangle Top</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("top", event.currentTarget.textContent + ".png")}}

                >Bandeau Top</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >Bottom 1</div>
              <div className="item"

                onClick={(event) => {this.displayTopBot("bottom", event.currentTarget.textContent + ".png")}}

                >Bottom 2</div>
              <figure className="item cover"
              style={{opacity: coverOpacity}}
              onClick={this.coverup}
                >Cover Up</figure>
              <div className="back"><img src={back} alt=""
              onClick={this.goBack}/></div>
           </div>

        </section>

        <section className={"model" + semiVisible} onClick={() => {
          this.mobileMenuTap();
        }}>
          <img src={require("../images/beauty/body.png")} alt="" className="body" />
          <img src={require("../images/beauty/" + this.state.hair)} alt="" className="hair" />
          <img src={require("../images/beauty/" + this.state.topOption)} alt="" className="top-option" />
          <img src={require("../images/beauty/" + this.state.shoes)} alt="" className="shoes" />
          <img src={require("../images/beauty/" + this.state.bottom)} alt="" className="bottom" style={{display: this.state.topBotDisplay}}/>
          <img src={require("../images/beauty/" + this.state.top)} alt="" className="top"
          style={{
            display: this.state.topBotDisplay,
            zIndex: this.state.top === "Crop Top 2.png" ||
            this.state.top === "Vercetti.png" ? 5 : 3
          }} />
          <img src={require("../images/beauty/" + this.state.onepiece)} alt="" className="one-piece" style={{display: this.state.dressDisplay}}/>
          <img src={require("../images/beauty/" + this.state.bottomOption)} alt="" className="bottom-option" />
       </section>
      </div>
    )
  }
}
