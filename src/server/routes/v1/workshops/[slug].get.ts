import { defineEventHandler, getRouterParam } from 'h3';
import { WORKSHOP } from '../../../data/workshop';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  if (!slug) return null;
  return WORKSHOP.find((workshop) => workshop.slug === slug);
});
