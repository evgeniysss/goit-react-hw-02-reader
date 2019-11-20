import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ currentPublic, currentPublicTitle }) => {
  return (
    <>
      <article className={styles.publication}>
        <h2>{currentPublicTitle}</h2>
        <p>{currentPublic}</p>
      </article>
    </>
  );
};

export default Publication;
Publication.propTypes = {
  currentPublic: PropTypes.string.isRequired,
  currentPublicTitle: PropTypes.string.isRequired,
};
