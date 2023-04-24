import { gql } from 'apollo-angular';

export function getPageQuery(documentID:string) {
  return {
    query: gql`
    query About {
      Page(id: "${documentID}") {
        _id
        title
        subtitle
        _slug
        stack {
          __typename
          ... on ImageAndText {
            _id
            title
            text
            image {
              name
              url
            }
            image_position
          }
        }
        seo {
          _id
          title
          description
          social_media_image {
            _id
            url
          }
        }
      }
    }
  `,
  };
}
