export function fireAction(ACTION_FETCH) {
  return () => {
    return {
      type: ACTION_FETCH
    };
  };
}

export function fireActionPayload(ACTION_FETCH_PAYLOAD) {
  return (payloadInformation) => {
    return {
      type: ACTION_FETCH_PAYLOAD,
      payload: payloadInformation
    }
  }
}