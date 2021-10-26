// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

export const IndividualSportQuery = graphql`
query IndividualSportQuery($id: String!) {
    sportByID (id: $id ) {
        ...SportFragmentRefetchable
    }
} 
`;