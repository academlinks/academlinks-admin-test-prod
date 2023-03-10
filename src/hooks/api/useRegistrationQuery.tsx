import { useAppDispatch } from "../../store/hooks";

import {
  getRegistrationLabels,
  getRegistrationRequesDetails,
  aproveRequest,
  deleteRequest,
  setNewRegRequest,
  encreaseUnseenRegRequestsCount,
  // NaN API Tasks
  resetOperationError,
  resetRedirectAlert,
  setFilterKey,
} from "../../store/reducers/registrationReducer";

import {
  GetRegistrationRequestDetailsPropsT,
  RequestMutationPropsT,
  FilterKeyT,
} from "../../interface/reducers/registrationReducer.types";

import { RegistrationLabelsT } from "../../interface/db/registration.types";

export default function useRegistrationQuery() {
  const dispatch = useAppDispatch();

  function getRegistrationLabelsQuery(key: FilterKeyT) {
    dispatch(getRegistrationLabels(key));
  }

  function getRegistrationRequestDetailsQuery({
    registrationId,
  }: GetRegistrationRequestDetailsPropsT) {
    dispatch(getRegistrationRequesDetails({ registrationId }));
  }

  function aproveRequestQuery({ registrationId }: RequestMutationPropsT) {
    dispatch(aproveRequest({ registrationId }));
  }

  function deleteRequestQuery({ registrationId }: RequestMutationPropsT) {
    dispatch(deleteRequest({ registrationId }));
  }

  //NaN API Task
  function setNewRegRequestHandler(params: RegistrationLabelsT) {
    dispatch(setNewRegRequest(params));
  }

  function handleEncreaseUnseenRegRequestCount() {
    dispatch(encreaseUnseenRegRequestsCount());
  }

  function handleResetRedirectAlert() {
    dispatch(resetRedirectAlert());
  }

  function handleFilterKey(key: FilterKeyT) {
    dispatch(setFilterKey(key));
  }

  function handleResetOperationError() {
    dispatch(resetOperationError());
  }

  return {
    getRegistrationLabelsQuery,
    getRegistrationRequestDetailsQuery,
    aproveRequestQuery,
    deleteRequestQuery,
    //NaN API Task
    setNewRegRequestHandler,
    handleEncreaseUnseenRegRequestCount,
    handleResetRedirectAlert,
    handleFilterKey,
    handleResetOperationError,
  };
}
