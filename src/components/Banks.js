import React, { Component } from 'react';
import BankStore from '../stores/BankStore';
import BankActions from  '../actions/BankActions';

export default class Banks extends Component {
  constructor() {
    super();
    this.state = {
      banks: [{name: 'bank1', image: 'https://thumb9.shutterstock.com/display_pic_with_logo/305215/171884546/stock-photo-full-body-picture-of-four-casual-young-people-with-hands-folded-standing-on-white-background-and-171884546.jpg' },
      {name:'bank2', image:'http://thumb1.shutterstock.com/display_pic_with_logo/514156/338985098/stock-photo-full-length-portrait-of-creative-business-people-standing-with-manager-against-white-background-338985098.jpg' },
      {name:'bank3', image:'http://static1.squarespace.com/static/53d160c0e4b0a7476418e48f/t/53d161a7e4b0c0e2154c4367/1424185003020/?format=1500w'},
      {name:'bank4', image:'http://previews.123rf.com/images/justmeyo/justmeyo1010/justmeyo101000114/7913559-Business-people-group-with-problems-thinking-at-solutions-while-a-young-man-standing-in-front-of-cam-Stock-Photo.jpg' },
      {name:'bank5', image:'http://all4desktop.com/data_images/original/4240427-people.jpg' },
      {name:'bank6', image:'https://www.sadakafirm.com/wp-content/uploads/2015/02/8808947-sad-serious-five-business-people-standing-in-a-row-and-looking-at-camera-isolated-on-white-backgroun.jpg' }]
    };
  }

  componentWillMount() {
    BankStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    BankStore.stopListening(this._onChange);
  }

  _onChange = () => {
    this.setState({});
  }

  render() {
    let { banks } = this.state;
    return (
      <div>

      </div>
    )
  }
};