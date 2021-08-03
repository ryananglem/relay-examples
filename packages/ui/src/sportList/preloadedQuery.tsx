import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { SportQuery } from './SportQuery';

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.

export const preloadedQuery = loadQuery(RelayEnvironment, SportQuery, {
  /* query variables */
});
