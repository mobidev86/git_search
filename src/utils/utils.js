import { debounce } from 'lodash';

let events = null;
export const addDebounceEvents = (...args) => {
  events = debounce(...args, 800);
  return (e) => {
    e.persist();
    return events(e);
  };
};

export const cancelEvent = () => {
  if (events) {
    events.cancel();
  }
};
