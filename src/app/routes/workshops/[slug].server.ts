import { PageServerLoad } from '@analogjs/router';
import { WorkshopAttributes } from 'src/app/models/workshop.model';

export const load = async ({ params, fetch, event }: PageServerLoad) => {
  const slug = params ? params['slug'] : null;
  console.log('load work/slug', slug);
  if (!slug) {
    return;
  }
  const workshop = await fetch<WorkshopAttributes | null>(
    `/api/v1/workshops/${slug}`,
  );

  return {
    workshop,
  };
};
