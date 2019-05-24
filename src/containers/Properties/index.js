import React from "react";
import PropTypes from "prop-types";
import Property from "../../components/Property";
import firebaseDB from "../../config/firebase";
import Auth from "../../shared/util/Auth";

class Properties extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedMlsId: null
    };
  }

  handleSaveLocation = property => {
    const userId = Auth.getUser();
    const { mlsId,mls: { status } } = property; 

    firebaseDB
      .ref("locations/" + mlsId)
      .set({ userId, mlsId, status })
      .then(() => this.setState({ savedMlsId: mlsId }));
  };

  render() {
    const { properties } = this.props;

    return (
      <div>
        <p className="App-property-banner p-2">
          <b>{properties.length} Real Estate Listings for Sale</b>
        </p>
        <div className="App-properties container">
          { properties.length &&
            properties.map((property, i) => {
              return (
                <Property
                  property={property}
                  key={i}
                  isSaved={this.state.savedMlsId === property.mlsId}
                  saveLocation={mlsId => this.handleSaveLocation(mlsId)}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

Properties.propTypes = {
  properties: PropTypes.array.isRequired
};

export default Properties;
