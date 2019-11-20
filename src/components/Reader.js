import React, { Component } from 'react';
import T from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import readerStyle from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    index: 0,
    position: 1,
  };

  onIncrement = () => {
    const { position } = this.state;
    this.setState(prevState => ({ index: prevState.index + position }));
  };

  onDecrement = () => {
    const { position } = this.state;
    this.setState(prevState => ({ index: prevState.index - position }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;

    const buttonPrevActive = index === 0;
    const buttonNextActive = index + 1 === items.length;

    return (
      <>
        <div className={readerStyle.box}>
          <Controls
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            buttonPrevActive={buttonPrevActive}
            buttonNextActive={buttonNextActive}
          />
          <Counter activeIndex={index + 1} maxIndex={items.length} />
          <Publication
            currentPublic={items[index].text}
            currentPublicTitle={items[index].title}
          />
        </div>
      </>
    );
  }
}
