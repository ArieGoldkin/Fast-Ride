import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as FastRiderActions from "./actions/FastRiderActions";
import { GetToken } from "../userComponents/userSelectors";
import {
  selectRiderDataLoading,
  selectData,
} from "./selectors/FastRiderSelectors";

import FastRiderList from "./FastRiderList";

const FastRider = ({ getData, items, loading, token }) => {
  useEffect(() => {
    loading && getData(token);
  }, [getData, loading, token]);

  return (
    <>
      <FastRiderList items={items} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: selectRiderDataLoading(state),
    items: selectData(state),
    token: GetToken(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (token) =>
      dispatch(FastRiderActions.getFastRiderDataRequest(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastRider);
