import React from "react";
import Auth from "../../shared/util/Auth";
import PropertiesList from "../PropertiesList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null
    };
  }

  componentDidMount() {
    this.setState({ userId: Auth.getUser() });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PropertiesList />
        <Footer />
      </div>
    );
  }
}

export default App;
