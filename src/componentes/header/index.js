import React from 'react';

import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const header = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default header;
