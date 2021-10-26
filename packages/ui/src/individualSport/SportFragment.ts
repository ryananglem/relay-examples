//@ts-ignore
import graphql from 'babel-plugin-relay/macro';

//@refetchable(queryName: "SportFragmentRefreshQuery")
export const SportFragment = graphql`
  fragment SportFragmentRefetchable on Sport 
  @refetchable(queryName:"IndividualSportQueryRefetch")
         {
          
              id  
              name
        }
      
    
`;
/*
fragment SportFragment_sport on Sport {
  id
  name
}
*/