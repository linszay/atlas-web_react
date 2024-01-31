// more components - with specialization
import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = ({ title, children }) => {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title}>{children}</BodySection>
        </div>
    );
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
      fontFamily: 'Galano Grotesque Alt, sans-serif',
      color: '#738ca5',
      marginBottom: '40px',
    },
  });
  

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
children: null,
};

export default BodySectionWithMarginBottom;
