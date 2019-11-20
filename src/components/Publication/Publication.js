import React from 'react';
import T from 'prop-types';
import publicationStyles from './Publication.module.css';

const Publication = ({ currentPublic, currentPublicTitle }) => {
  return (
    <>
      <article className={publicationStyles.publication}>
        <h2>{currentPublicTitle}</h2>
        <p>{currentPublic}</p>
      </article>
    </>
  );
};

export default Publication;
Publication.propTypes = {
  currentPublic: T.string.isRequired,
  currentPublicTitle: T.string.isRequired,
};
