import React from "react";
import Properties from "../Properties";
import Spinner from "../../components/Spinner";
import { simplyrets } from "../../services/simplyretsService";

class PropertiesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: []
    };
  }

  componentDidMount() {
    simplyrets.getAllProperties().then(data => {
      this.setState({ properties: data });
    });
  }

  render() {
    if (this.state.properties.length > 0) {
      return (
        <div className="App-properties-list">
          <Properties properties={this.state.properties} />
        </div>
      );
    }
    return <Spinner />;
  }
}

export default PropertiesList;
