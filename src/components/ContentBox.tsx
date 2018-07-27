import * as React from 'react';
import styled from 'styled-components';
import { orange, gray, white, midGray } from '../../styles/colors';
import { media } from '../../styles/styles';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: ${gray};
  color: ${white};
  font-weight: 200;
  margin-bottom: 25px;
  max-width: ${(props: { maxWidth: string }) => props.maxWidth};
  ${media.tablet`
    max-width: 100%;
  `};
`;
const TopBar = styled.div`
  align-items: center;
  justify-content: center;
  min-height: 45px;
  max-height: 45px;
  color: ${white};
  display: flex;
  flex-grow: 1;
  font-size: 25px;
  background-color: ${orange};
  text-transform: uppercase;
  border-bottom: ${midGray} solid 2px;
`;
const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 15px;
`;

type Props = {
  title: string;
  maxWidth?: string;
  htmlString?: string;
};
class ContentBox extends React.Component<Props> {
  static defaultProps = {
    maxWidth: '100%',
    htmlString: false
  };

  render() {
    return (
      <Wrapper maxWidth={this.props.maxWidth}>
        <TopBar>{this.props.title}</TopBar>
        {this.props.htmlString ? (
          <Content
            dangerouslySetInnerHTML={{ __html: this.props.htmlString }}
          />
        ) : (
          <Content>{this.props.children}</Content>
        )}
      </Wrapper>
    );
  }
}

export default ContentBox;
