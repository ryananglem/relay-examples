// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

export const SportQuery = graphql`
query SportQuery {
   hello
    sport { 
        ...SportListFragment_sport
      } 
} 
`;