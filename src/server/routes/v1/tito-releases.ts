import { defineEventHandler } from 'h3';
const TITO_KEY = 'public_TobWnmMJc48u15ZAYXxG';

export default defineEventHandler(async (event) => {
  const response = await fetch(
    'https://api.tito.io/v3/ngrome-events/ngrome-conf-mmxxiv/releases',
    {
      headers: {
        Authorization: `Token token=${TITO_KEY}`,
        Accept: 'application/json',
      },
    },
  );
  console.log('response', response);
  return await response;
});
