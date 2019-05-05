import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  NetInfo,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';

import RepositorioItem from './componentes/repositorioItem';

import styles from './styles';

export default class home extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    repoName: '',
    repositorios: [],
    error: '',
    loading: false,
  };

  componentDidMount() {
    this.loadRepositorio();
  }

  renderList = () => {
    const { repositorios } = this.state;
    return (
      <FlatList
        style={styles.flatList}
        data={repositorios}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <RepositorioItem repositorio={item} />}
      />
    );
  };

  loadRepositorio = async () => {
    const repositorios = JSON.parse(await AsyncStorage.getItem('@GitIssues:repositorios'));

    this.setState({ repositorios: repositorios || [] });
  };

  addRepositorio = async () => {
    const { repoName, repositorios } = this.state;
    this.setState({ error: '', loading: true });

    if (!repoName) {
      this.setState({ error: 'Digite o nome do repositorio', loading: false });
      return;
    }

    try {
      const { data } = await api.get(`repos/${repoName}`);
      if (repositorios.find(repo => repo.id === data.id)) {
        this.setState({ error: 'Repositório ja cadastrado', loading: false });
      } else {
        await AsyncStorage.setItem(
          '@GitIssues:repositorios',
          JSON.stringify([...repositorios, data]),
        );
        this.setState({
          repositorios: [...repositorios, data],
          error: '',
          loading: false,
          repoName: '',
        });
      }
    } catch (err) {
      this.setState({ error: 'Repositório invalido', loading: false });
    }
  };

  render() {
    const { repoName, error, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.formInput}
            value={repoName}
            onChangeText={value => this.setState({ repoName: value })}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar repositório (facebook/react-native)"
          />
          {loading ? (
            <TouchableOpacity style={styles.formIcon} disabled onPress={this.addRepositorio}>
              <ActivityIndicator size={24} color="#000" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.formIcon} onPress={this.addRepositorio}>
              <Icons name="plus" size={24} color="#000" />
            </TouchableOpacity>
          )}
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {this.renderList()}
      </View>
    );
  }
}
