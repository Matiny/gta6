import React from 'react';


export default class Weapons extends React.Component {
  constructor() {
    super();

    this.state = {
      melee: "Unarmed.svg",
      hand: "Desert Eagle.svg",
      rifle: "G36C.svg",
      shotgun: "Sawed Off Pump.svg",
      heavy: "Rocket Launcher.svg",
      thrown: "Grenade.svg",
      weaponCategory: "",
      height: 0
    }
  }

  setweaponCategory = (weaponCategory) =>{
    this.setState({weaponCategory});
  }

  pickWeapon = (category, weapon) =>{
    this.setState({
      [category]: weapon,
      weaponCategory: ""
    });
  }

  componentDidMount() {
    if (window.innerWidth <= 900) {
      console.log("Under 900");
      let height = document.querySelector('.text').clientHeight;
      height += height * .10;
      this.setState({ height });
    }
  }

  render() {
    //Add or remove class based on clicking an option
    let menuVisible = this.state.weaponCategory === ""? "" : " invisible";
    //But 1st you gotta pick an option
    let meleeOptions = this.state.weaponCategory === "melee"? "" : " invisible";
    let handOptions = this.state.weaponCategory === "hand"? "" : " invisible";
    let rifleOptions = this.state.weaponCategory === "rifle"? "" : " invisible";
    let shotgunOptions = this.state.weaponCategory === "shotgun"? "" : " invisible";
    let heavyOptions = this.state.weaponCategory === "heavy"? "" : " invisible";
    let thrownOptions = this.state.weaponCategory === "thrown"? "" : " invisible";

    let item1 = this.state.weaponCategory === "" ? "" : " weapon1";
    let item2 = this.state.weaponCategory === "" ? "" : " weapon2";
    let item3 = this.state.weaponCategory === "" ? "" : " weapon3";
    return (
      <div className="base-content">
        <div className="close-button" onClick={this.props.close}></div>
        <div className="text">
          <ul>
            <li>
              <p><i>Choose a weapon category, and then pick from the submenu to see your updated loadout</i></p>
            </li>
            <li>
              <p>The weapon management in this game is very loose and awkward. Your character might end up carrying too many weapons at once.</p>
            </li>
            <li>
              <p>If you throw away a gun, the game simply reloads you with that same gun later on.</p>
            </li>
            <li>
              <p>I propose a smaller loadout that you can customize from a bigger stash of weapons. After all, players don't need 20 weapons at once.</p>
            </li>
          </ul>
        </div>

        <ul className={"loadout" + menuVisible}>
          <li className="weapon"

            onClick={() => {this.setweaponCategory("melee")}}><img
            src={require("../images/weapons/melee/" + this.state.melee)}

            alt="" /></li>
          <li className="weapon"

            onClick={() => {this.setweaponCategory("hand")}}><img
            src={require("../images/weapons/hand/" + this.state.hand)}

            alt="" /></li>
          <li className="weapon"

            onClick={() => {this.setweaponCategory("rifle")}}><img
            src={require("../images/weapons/rifle/" + this.state.rifle)}

            alt="" /></li>
          <li className="weapon"

            onClick={() => {this.setweaponCategory("shotgun")}}><img
            src={require("../images/weapons/shotgun/" + this.state.shotgun)}

            alt="" /></li>
          <li className="weapon"

            onClick={() => {this.setweaponCategory("heavy")}}><img
            src={require("../images/weapons/heavy/" + this.state.heavy)}

            alt="" /></li>
          <li className="weapon"

            onClick={() => {this.setweaponCategory("thrown")}}><img
            src={require("../images/weapons/thrown/" + this.state.thrown)}

            alt="" /></li>
        </ul>

        <ul className={"melee selection" + meleeOptions}
          style={{ top: this.state.height }} >
          <li className={"choice" + item1}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}
            ><p>Unarmed</p></li>
          <li className={"choice" + item2}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}
            ><p>Golf Club</p></li>
          <li className={"choice" + item3}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Katana</p></li>
        </ul>

        <ul className={"hand selection" + handOptions}
          style={{ top: this.state.height }} >
          <li className={"choice" + item1}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}
            ><p>Desert<br/> Eagle</p></li>
          <li className={"choice" + item2}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}
            ><p>Double Barrel</p></li>
          <li className={"choice" + item3}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}
            ><p>Mini Uzi</p></li>
        </ul>

        <ul className={"rifle selection" + rifleOptions}
          style={{ top: this.state.height }} >
          <li className={"choice" + item1}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>G36C</p></li>
          <li className={"choice" + item2}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>SL8</p></li>
          <li className={"choice" + item3}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>M82</p></li>
        </ul>

        <ul className={"shotgun selection" + shotgunOptions}
          style={{ top: this.state.height }} >
          <li className={"choice" + item1}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Sawed Off Pump</p></li>
          <li className={"choice" + item2}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>M1014<br/> Semi-Auto</p></li>
          <li className={"choice" + item3}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>AA12 Automatic</p></li>
        </ul>

        <ul className={"heavy selection" + heavyOptions}
          style={{ top: this.state.height }} >
          <li className={"choice" + item1}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Rocket Launcher</p></li>
          <li className={"choice" + item2}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Minigun</p></li>
          <li className={"choice" + item3}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Grenade Launcher</p></li>
        </ul>

        <ul className={"thrown selection" + thrownOptions}
          style={{ top: this.state.height }} >
          <li className={"choice" + item1}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Grenade</p></li>
          <li className={"choice" + item2}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Sticky Bomb</p></li>
          <li className={"choice" + item3}

            onClick={(event) => {this.pickWeapon(this.state.weaponCategory, event.currentTarget.textContent + ".svg")}}

            ><p>Molotov</p></li>
        </ul>

      </div>
    )
  }
}
