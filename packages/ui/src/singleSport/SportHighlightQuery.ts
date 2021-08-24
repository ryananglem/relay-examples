// @ts-ignore
import graphql from 'babel-plugin-relay/macro'

export const SportHighlightQuery = graphql`
  query SportHighlightQuery($id: String!) {
    hello
    sportByID(id: $id) {
      ...SportRefetchableFragment_sport
    }
  }
`
