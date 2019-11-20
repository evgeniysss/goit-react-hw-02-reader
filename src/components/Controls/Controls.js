import React from 'react';
import T from 'prop-types';
import controlsStyle from './Controls.module.css';

const Controls = ({
  onIncrement,
  onDecrement,
  buttonPrevActive,
  buttonNextActive,
}) => {
  return (
    <>
      <div className={controlsStyle.reader}>
        <section className={controlsStyle.buttonSelector}>
          <button
            disabled={buttonPrevActive}
            onClick={onDecrement}
            type="button"
            className={
              buttonPrevActive
                ? controlsStyle.button_disabled
                : controlsStyle.button
            }
          >
            Back
          </button>
          <button
            disabled={buttonNextActive}
            onClick={onIncrement}
            type="button"
            className={
              buttonNextActive
                ? controlsStyle.button_disabled
                : controlsStyle.button
            }
          >
            Forward
          </button>
        </section>
      </div>
    </>
  );
};

Controls.propTypes = {
  onIncrement: T.func.isRequired,
  onDecrement: T.func.isRequired,
  buttonPrevActive: T.bool.isRequired,
  buttonNextActive: T.bool.isRequired,
};

export default Controls;
