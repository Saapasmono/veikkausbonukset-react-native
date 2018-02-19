import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

import FetchPickData from './../Actions/FetchPickData';
import Pick from './Pick';

class PickContainer extends Component {

  componentDidMount(){
    this.props.FetchPickData();
  }

  renderPicks(){
    const {pick} = this.props;
    console.log(pick)
    return pick.data.map((pick, index) =>
      <Pick
        key={index}
        pick_title={pick.title}
        pick_link={pick.link}
        pubDate={pick.pubDate}
        desc={pick.description}
      />
    )
  }

  render (){
    return(
      <View>
        {this.renderPicks()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    pick: state.pick
  }

}

export default connect(mapStateToProps, {FetchPickData})(PickContainer)