import { counterActions } from "./redux/index";

// ACTION CREATOR THUNK
// that to get the latest value form firebase without assign the intial value of state in firebase
export const getData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-firebase-3bb53-default-rtdb.firebaseio.com/counter.json"
      );

      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      console.log("Data from firebase: " + data);
      dispatch(counterActions.getCounter(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendData = (counter) => {
  return async (dispatch) => {
    const travelTheData = async () => {
      const response = await fetch(
        "https://react-firebase-3bb53-default-rtdb.firebaseio.com/counter.json",
        {
          method: "PUT",
          body: JSON.stringify(counter)
        }
      );

      if (!response.ok) {
        throw new Error("error");
      }
      dispatch(counterActions.setLoading({ status: false }));
    };

    try {
      await travelTheData(counter);
    } catch (err) {
      console.log(err);
    }
  };
};
