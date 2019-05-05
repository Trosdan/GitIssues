import React, { Component } from 'react';

import {
  View, Text, FlatList, ActivityIndicator,
} from 'react-native';

import api from '~/services/api';
import PropTypes from 'prop-types';

import IssuesItem from './componentes/IssuesItem';
import IssuesFilter from './componentes/IssuesFilter';
import styles from './styles';

export default class issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  state = {
    issues: [],
    error: '',
    loading: false,
    issuesFilter: 'all',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { navigation } = this.props;
    const { issuesFilter } = this.state;
    this.setState({ loading: true, error: '' });
    try {
      const { data } = await api.get(
        `repos/${navigation.getParam('full_name')}/issues?state=${issuesFilter}`,
      );
      this.setState({ issues: data, loading: false, error: '' });
    } catch (err) {
      this.setState({ loading: false, error: 'Erro ao carregar as Issues' });
    }
  };

  changeFilter = async (value) => {
    const { navigation } = this.props;
    this.setState({ loading: true, error: '', issuesFilter: value });
    try {
      const { data } = await api.get(
        `repos/${navigation.getParam('full_name')}/issues?state=${value}`,
      );
      this.setState({
        issues: data,
        loading: false,
        error: '',
      });
    } catch (err) {
      this.setState({ loading: false, error: 'Erro ao carregar as Issues' });
    }
  };

  renderIssues = () => {
    const { issues, loading } = this.state;
    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <IssuesItem issues={item} />}
        refreshing={loading}
        onRefresh={this.loadIssues}
      />
    );
  };

  render() {
    const { error, issuesFilter } = this.state;
    return (
      <View style={styles.container}>
        <IssuesFilter issuesFilter={issuesFilter} changeFilter={this.changeFilter} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {this.renderIssues()}
      </View>
    );
  }
}
