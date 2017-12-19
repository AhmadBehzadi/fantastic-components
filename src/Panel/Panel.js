import React from 'react';


import Wrapper from './style/WrapperStyled';
import Body from './style/BodyStyled';
import Footer from './style/FooterStyled';
import Heading from './style/HeadingStyled';


class Panel extends React.Component {
  render() {
    const {
      children,
      footer,
      header
    } = this.props;
    return (
      <Wrapper {...this.props}>
        {
          header &&
          <Heading {...this.props}>
           {header}
          </Heading>
        }
        <Body {...this.props}>
          {children}
        </Body>
        {
          footer &&
          <Footer {...this.props}>
            {footer}
          </Footer>
        }
      </Wrapper>
    );
  }
}

export default Panel;
