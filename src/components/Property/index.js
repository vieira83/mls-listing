import React from "react";
import { FormattedNumber } from "react-intl";

const Property = props => {
  const { property, saveLocation, isSaved } = props;

  const formatDate = string => {
    return <span>{new Date(string).toDateString()}</span>;
  };

  return (
    <div className="App-property">
      <div className="row p-0 m-0">
        <div className="App-property-photo col-sm-3 p-0 m-0">
          <img
            src={property.photos[0]}
            alt=""
            className="App-property-photo__pos"
          />
          <div>
            <span><b>MLSID:</b> {property.mlsId}</span>
            <p><b>List Date: </b> {formatDate(property.listDate)}</p>
          </div>
        </div>
        <div className="App-property-details col-sm-9 p-0 m-0">
          <div className="p-1">
            <b className="App-property-price ">
              <FormattedNumber
                value={property.listPrice}
                currency="USD"
                style="currency"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </b>
            <span className="float-right App-property-price">
              {property.mls.status}
            </span>
            {isSaved && (
              <span className="float-right App-property__saved">
                <b> MLS # {property.mlsId} Saved to Your Account</b>
              </span>
            )}
          </div>

          <div className="p-1">
            <b>Address: </b>
            {property.address.full}, {property.address.city},{" "}
            {property.address.state}, {property.address.postalCode},{" "}
            {property.address.country}
          </div>
          <div className="p-1">
            <b>Features: </b>
            {property.property.stories} stories, {property.property.bedrooms}{" "}
            bedrooms, {property.property.bathsFull} full baths,{" "}
            {property.property.bathsHalf} half baths.
          </div>
          <div className="row p-0 m-0">
            <div className="App-property-remarks p-1">
              <p><b>Remarks: </b>{property.remarks} </p>
            </div>
            <div className="App-property-save">
              <button
                className="btn btn-primary float-right App-btn-primary"
                onClick={() => saveLocation(property)}
                disabled={isSaved}
              >
                Save Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
