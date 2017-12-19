/**
 * Created by Programmer1 on 12/18/2017.
 */
import React, {Component} from 'react';
import TabLabels from './TabLabels';
import Wrapper from './style/WrapperStyled';
import Content from './style/ContentStyled';
class Tab extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentTab: props.currentTab
    };
  }

  onTabChange(index) {
    this.setState({currentTab: index});
  }

  render() {
    const tabContent = this.props.tabs.length > 0 ? this.props.tabs[this.state.currentTab].content : null;
    return (
      <Wrapper {...this.props}>
        <TabLabels
          tabs={this.props.tabs}
          onTabChange={this.onTabChange.bind(this)}
          currentTab={this.state.currentTab}
          primary={this.props.primary}
          secondary={this.props.secondary}
          info={this.props.info}
          warning={this.props.warning}
          danger={this.props.danger}
          inverse={this.props.inverse}
          rtl={this.props.rtl}
        />
        <Content {...this.props}>
          {tabContent}
        </Content>
      </Wrapper>
    );
  }
}
export default Tab;
