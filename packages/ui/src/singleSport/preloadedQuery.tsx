import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from '../relay/RelayEnvironment';
import { SportQuery } from './SportQuery';

export const preloadedQuery = loadQuery(RelayEnvironment, SportQuery, {
  /* query variables */
});
