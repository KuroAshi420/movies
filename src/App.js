import React from 'react';
import "./App.css";
import Container from "./components/movieContainer";
import WithLoading from './components/loading.js';
const ContainerWithLoading = WithLoading(Container);
class App extends React.Component {
  state = {
    loading: false,
    repos: null
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/farskid/repos`)
      .then(json => json.json())
      .then(repos => {
        this.setState({ loading: false, repos: repos });
      });
  }
render() {
    return (
      <ContainerWithLoading isLoading={this.state.loading} repos={this.state.repos} />
    )
  }
}
export default App