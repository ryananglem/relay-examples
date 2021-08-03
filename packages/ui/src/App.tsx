import React from 'react';
import './App.css';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks';
// import  GitHubRelayEnvironment from './externalGraph/RelayEnvironment'

import  LocalRelayEnvironment from './sportList/RelayEnvironment'
// import { LeoVegasRepositoryLoader} from './externalGraph/LeoVegasRepositoryLoader'

import { SportListLoader} from './sportList/SportListLoader'
import './App.css';

const AppRoot = () => (
  <>
   {/* <RelayEnvironmentProvider environment={GitHubRelayEnvironment}>
     <LeoVegasRepositoryLoader />
 </RelayEnvironmentProvider> */}
 <RelayEnvironmentProvider environment={LocalRelayEnvironment}>
     <SportListLoader />
 </RelayEnvironmentProvider>
 </>
);

export default AppRoot
