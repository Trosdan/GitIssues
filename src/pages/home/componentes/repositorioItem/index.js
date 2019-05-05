import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const repositorioItem = ({ repositorio, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      navigation.navigate('Issues', { title: repositorio.name, full_name: repositorio.full_name });
    }}
  >
    <Image style={styles.avatar} source={{ uri: repositorio.owner.avatar_url }} />
    <View style={styles.info}>
      <Text>{repositorio.name}</Text>
      <Text>{repositorio.owner.login}</Text>
    </View>
    <Icons style={styles.icon} name="chevron-right" size={48} />
  </TouchableOpacity>
);

repositorioItem.propTypes = {
  repositorio: PropTypes.shape().isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(repositorioItem);
