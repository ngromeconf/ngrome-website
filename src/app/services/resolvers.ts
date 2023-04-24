import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';
import { Page, PageResult } from '../models/page.model';
import { Apollo } from 'apollo-angular';
import { map, take } from 'rxjs';
import { inject } from '@angular/core';
import { getPageQuery } from './query.model';

const pagesId = [
  {
    page: '/about',
    id: 'b3d52585-3bbf-4900-86c1-e2ada614c739',
  },
  { page: '/sponsors', id: '' },
];

var documentID = '';

export function resolvePageData(documentID: string) {
  documentID = documentID;
  const apollo = inject(Apollo);
  return apollo
    .watchQuery(getPageQuery(documentID))
    .valueChanges.pipe(take(1))
    .pipe(
      map((result) => {
        const data = result as unknown as PageResult;
        return data.data.Page as Page;
      })
    );
}

// temporary
function injectActivePostAttributes(
  route: ActivatedRouteSnapshot,
  postId: string
): Promise<PageResult> {
  return new Promise((resolve) => {
    const apollo = inject(Apollo);
    apollo
      .watchQuery(getPageQuery(postId))
      .valueChanges.pipe(take(1))
      .subscribe((result: any) => {
        resolve(result);
      });
  });
}

export const postTitleResolver: ResolveFn<string> = (route) => {
  documentID = pagesId.filter((item) =>
    item.page === route._routerState.url ? item.id : ''
  )[0].id;
  return injectActivePostAttributes(route, documentID).then((result: PageResult) => {
    return result?.data?.Page.title as string;
  });
};

export const postMetaResolver: ResolveFn<MetaTag[]> = (route) => {
  documentID = pagesId.filter((item) =>
    item.page === route._routerState.url ? item.id : ''
  )[0].id;
  const postAttributes = injectActivePostAttributes(route, documentID);

  return postAttributes.then((result: PageResult) => {
    return [
      {
        name: 'description',
        content: result.data.Page?.subtitle,
      },
      {
        name: 'author',
        content: 'NGRome Team',
      },
      {
        property: 'og:title',
        content: result.data.Page?.title,
      },
      {
        property: 'og:description',
        content: result.data.Page?.subtitle,
      },
      {
        property: 'og:image',
        content: result.data.Page?.seo?.social_media_image[0].url,
      },
    ];
  });
};
