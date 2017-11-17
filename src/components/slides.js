import React from 'react';

export default class Slides extends React.Component {
   render() {
      return (
         <section className={this.props.slidesClass}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </section>
      )
   }

}
