import React from 'react';
import './App.css';
import  {

  RelayEnvironmentProvider,
} from 'react-relay/hooks';
// import  GitHubRelayEnvironment from './externalGraph/RelayEnvironment'

import  LocalRelayEnvironment from './relay/RelayEnvironment'
// import { LeoVegasRepositoryLoader} from './externalGraph/LeoVegasRepositoryLoader'

import { SportListLoader} from './sportList/SportListLoader'
import './App.css';
// import { usePreloadedQuery } from 'react-relay';

const App = () => {
  // const data  = usePreloadedQuery(appQuery, appQueryRef)
  return ( 
  <>
   {/* <RelayEnvironmentProvider environment={GitHubRelayEnvironment}>
     <LeoVegasRepositoryLoader />
 </RelayEnvironmentProvider> */}
 <RelayEnvironmentProvider environment={LocalRelayEnvironment}>
     <SportListLoader />
 </RelayEnvironmentProvider>
 </>
);
}
export default App
