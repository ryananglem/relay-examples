//@ts-ignore
import graphql from 'babel-plugin-relay/macro'

// @refetchable(queryName: "SportRefetchQuery")

export const SportRefetchableFragment = graphql`
  fragment SportRefetchableFragment_sport on Sport
  @argumentDefinitions(id: { type: "String" }) {
    id
    name
  }
`
