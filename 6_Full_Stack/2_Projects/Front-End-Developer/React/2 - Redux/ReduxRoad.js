const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
};

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
        return {
          ...state,
          supplies: state.supplies + action.payload.supplies,
          days: state.days + action.payload.days,
        }
    }
    case 'travel': {
      if (state.supplies - (20 * action.payload) < 0) {
        return state;
      } else {
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload,
        }
      }
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - action.payload.supplies,
        days: state.days + action.payload.days,
      }
    }
    case 'sell': {
      if (state.supplies - action.payload.supplies < 0) {
        return state;
      } else {
        return {
          ...state,
          supplies: state.supplies - action.payload.supplies,
          cash: state.cash + action.payload.cash
        }
      }
    }
    case 'buy': {
      if (state.cash - action.payload.cash < 0) {
        return state;
      } else {
        return {
          ...state,
          supplies: state.supplies + action.payload.supplies,
          cash: state.cash - action.payload.cash
        }
      }
    }
    case 'theft': {
      return {
        ...state,
        cash: state.cash / action.payload
      }
    }
    default: {
      return state;
    }
  }  
};

const gather = {
  type: 'gather',
  payload: {
    supplies: 15,
    days: 1
  }
};

  const travel = (days) => {
    return {
      type: 'travel',
      payload: days
    }
  };

  const tippedWagon = {
    type: 'tippedWagon',
    payload: {
      supplies: 30,
      days: 1
    }
  };

  const sell = {
    type: 'sell',
    payload: {
      supplies: 20,
      cash: 5
    }
  }

  const buy = {
    type: 'buy',
    payload: {
      supplies: 25,
      cash: 15
    }
  }

  const theft = {
    type: 'theft',
    payload: 2
  }

let wagon = reducer(undefined, {});

console.log(wagon);

wagon = reducer(wagon, travel(1));

console.log(wagon);

wagon = reducer(wagon, gather);

console.log(wagon);

wagon = reducer(wagon, tippedWagon);

console.log(wagon);

wagon = reducer(wagon, travel(3));

console.log(wagon);

wagon = reducer(wagon, gather);

console.log(wagon);

wagon = reducer(wagon, travel(1));

console.log(wagon);

wagon = reducer(wagon, sell);

console.log(wagon);

wagon = reducer(wagon, buy);

console.log(wagon);

wagon = reducer(wagon, theft);

console.log(wagon);