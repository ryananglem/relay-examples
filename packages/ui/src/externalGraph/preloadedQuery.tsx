import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { RepositoryNameQuery } from './RepositoryNameQuery';

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.

export const preloadedQuery = () => { return } //loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
//});
