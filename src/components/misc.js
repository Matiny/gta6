import React from 'react';

const Misc = ({close}) => {
  return(
    <div className="base-content">
      <div className="close-button" onClick={close}></div>
      <div className="text-misc">
      <p>
         There are some additional (non-visual) ideas worth mentioning here.
         <br />
         <br />
         Matchmaking can be a hassle since some players simply don't care to play certain missions or matches. That said, you should have the option to play the game with NPCs to fill in the gaps.
         <br />
         <br />
         Players should have the option to quit the mission, or simply restart. Since the game is multiplayer, there can also be a vote to do so.
         <br />
         <br />
         The game should clearly show your progress on the very lucrative heist challenges, instead of warning you at the last minute right before you launch a heist mission. Seeing as matchmaking is sluggish to begin with, this is a compound issue.
         <br />
         <br />
         Team balancing should be set as the default. I keep seeing players abusing non-balanced teams (5 vs. 1 for example), and the other players can only politely ask people to stop messing around.
         <br />
         <br />
         When you're in your closet changing clothes (shoutout to Jay-Z), every single category and subcategory of clothing is there in the menus. Meanwhile, you may not own any actual clothing in some categories, so what you see is just a confusing mash up of text. The game should either leave out the categories you don't own, or highlight the ones you do.
         <br />
         <br />
         When you get a bounty on your head, you receive a text message of the amount of the bounty. After a full in-game day, you can keep it. Thus, you need to manually keep track of the amount and the timer's countdown. The game should automatically do that for you.
      </p>
     </div>
    </div>
  )
}

export default Misc;
