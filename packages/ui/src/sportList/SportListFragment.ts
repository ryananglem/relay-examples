//@ts-ignore
import graphql from 'babel-plugin-relay/macro';

export const SportListFragment = graphql`
  fragment SportListFragment_sport on Sport @relay(plural:true) {
       id
       name
  }
`;