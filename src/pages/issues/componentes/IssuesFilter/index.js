import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const IssuesFilter = ({ issuesFilter, changeFilter }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.filterButton, issuesFilter === 'all' && styles.filterButtonS]}
      onPress={() => changeFilter('all')}
    >
      <Text style={styles.textButton}>All</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.filterButton, issuesFilter === 'open' && styles.filterButtonS]}
      onPress={() => changeFilter('open')}
    >
      <Text style={styles.textButton}>Open</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.filterButton, issuesFilter === 'closed' && styles.filterButtonS]}
      onPress={() => changeFilter('closed')}
    >
      <Text style={styles.textButton}>Close</Text>
    </TouchableOpacity>
  </View>
);

IssuesFilter.propTypes = {
  issuesFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default IssuesFilter;
