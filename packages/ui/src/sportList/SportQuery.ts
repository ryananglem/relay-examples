// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

// sport { ...SportFragment_sport  }
// sport {
//   id
//   name
//  }

// sport { 
//   ...SportFragment_sport 
//  } 

// sport { 
//   ...SportsListContainer_sport
// }

export const SportQuery = graphql`
  query SportQuery {
     hello
      sport { 
     name
        
        } 
  } 
`;