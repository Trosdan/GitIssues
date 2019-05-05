import React from 'react';

import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const IssuesItem = ({ issues }) => (
  <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(issues.html_url)}>
    <Image style={styles.avatar} source={{ uri: issues.user.avatar_url }} />
    <View style={styles.info}>
      <Text ellipsizeMode="tail" numberOfLines={1}>
        {issues.title}
      </Text>
      <Text>{issues.user.login}</Text>
    </View>
    <Icons name="chevron-right" size={48} />
  </TouchableOpacity>
);

IssuesItem.propTypes = {
  issues: PropTypes.shape().isRequired,
};

export default IssuesItem;
