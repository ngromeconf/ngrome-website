import { injectContentFiles } from '@analogjs/content';
import { Speaker } from 'src/app/models/speaker.model';

export function injectActiveSpeakers(): Speaker[] {
  return injectContentFiles<Speaker>((contentFile) =>
    contentFile.filename.includes('/src/content/speakers/'),
  )
    .map((speaker) => speaker.attributes as unknown as Speaker)
    .filter((speaker) => speaker.visible);
}
