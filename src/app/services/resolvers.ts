import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';
import { Page, PageResult } from '../models/page.model';
import { Apollo, gql } from 'apollo-angular';
import { map, reduce, take } from 'rxjs';
import { inject } from '@angular/core';

const query = {
  query: gql`
    query About {
      Page(id: "b3d52585-3bbf-4900-86c1-e2ada614c739") {
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

export function resolvePageData() {
  const apollo = inject(Apollo);
  return apollo
    .watchQuery(query)
    .valueChanges.pipe(take(1))
    .pipe(
      map( result => {
        console.log('pipe1: ', result);
        const data = result as unknown as PageResult;
        console.log('pipe1.1: ', data.data.Page);
        return data.data.Page as Page;
      })
    )
}

// temporary
function injectActivePostAttributes(
  route: ActivatedRouteSnapshot
): Promise<PageResult> {
  return new Promise((resolve) => {
    const apollo = inject(Apollo);
    apollo
      .watchQuery(query)
      .valueChanges.pipe(take(1))
      .subscribe((result: any) => {
        console.log('injectActivePostAttributes: ', result);
        resolve(result);
      });
  });
  //  .subscribe((result: any) => {
  //     console.log(result);
  //     this.page = result?.data?.Page;
  //     this.loading = result.loading;
  //     this.error = result.error;
  //   });
}

export const postTitleResolver: ResolveFn<string> = (route) => {
  return injectActivePostAttributes(route).then((result: PageResult) => {
    return result?.data?.Page.title as string;
  });
};

export const postMetaResolver: ResolveFn<MetaTag[]> = (route) => {
  const postAttributes = injectActivePostAttributes(route);

  return postAttributes.then((result: PageResult) => {
    return [
      {
        name: 'description',
        content: result.data.Page.subtitle,
      },
      {
        name: 'author',
        content: 'NGRome Team',
      },
      {
        property: 'og:title',
        content: result.data.Page.title,
      },
      {
        property: 'og:description',
        content: result.data.Page.subtitle,
      },
      {
        property: 'og:image',
        content: result.data.Page.seo.social_media_image[0].url,
      },
    ];
  });
};
