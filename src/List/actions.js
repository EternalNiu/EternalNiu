import {Async} from 'redux-action-boilerplate';

export const async = new Async({
  /* Create a name space. */
  prefix: 'list',
  /* Create a synchronous action. */
  actions: [
    'someAsync',
  ],
});

