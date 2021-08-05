//@ts-ignore
import graphql from 'babel-plugin-relay/macro';

export const SportFragment = graphql`
  fragment SportFragment_sport on Sport @relay(plural:true) {
       id
       name
  }
`;