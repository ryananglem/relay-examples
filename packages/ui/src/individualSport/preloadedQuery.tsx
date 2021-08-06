import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from '../relay/RelayEnvironment';
import { IndividualSportQuery } from './IndividualSportQuery';

export const preloadedQuery = (sportId: string) => loadQuery(RelayEnvironment, IndividualSportQuery, {
  id: sportId
});
