import React from 'react';
import './App.css';
import  {

  RelayEnvironmentProvider,
} from 'react-relay/hooks';
// import  GitHubRelayEnvironment from './externalGraph/RelayEnvironment'

import  LocalRelayEnvironment from './relay/RelayEnvironment'
// import { LeoVegasRepositoryLoader} from './externalGraph/LeoVegasRepositoryLoader'

import { SportListLoader} from './sportList/SportListLoader'
import {IndividualSportLoader } from './individualSport/IndividualSportLoader'
import './App.css';

const App = () => {
  return ( 
  <>
   {/* <RelayEnvironmentProvider environment={GitHubRelayEnvironment}>
     <LeoVegasRepositoryLoader />
 </RelayEnvironmentProvider> */}
 <RelayEnvironmentProvider environment={LocalRelayEnvironment}>
     <SportListLoader />
     <IndividualSportLoader /> 
 </RelayEnvironmentProvider>
 </>
);
}
export default App
