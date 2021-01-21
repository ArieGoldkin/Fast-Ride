export const selectRiderDataLoading = (state) => state.fastRiderData.loading;

export const selectData = (state) => state.fastRiderData.items;

export const getResultData = (state) => state.fastRideDataResult.item;

export const getSuccessResult = (state) => state.fastRideDataResult.success;

export const getFastRideError = (state) => state.fastRideDataResult.error;
