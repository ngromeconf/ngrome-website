import { Component } from '@angular/core';
import { ArticlePageComponent } from '../components/layout/pages/article-page/article-page.component';
import { Article } from '../components/layout/pages/article-page/article.model';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `<app-article-page
    title="Code of Conduct"
    [articles]="articles"
  />`,
  imports: [ArticlePageComponent],
})
export default class CodeOfConductComponent {
  articles: Article[] = [
    {
      title: null,
      paragraphs: [
        'NG Rome is a friendly conference where everyone should feel welcome, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion or lack thereof. Conference desire to be safe and comfortable to share ideas and engage in open discussion without the threat of intimidation or public humiliation. Please be respectful in person and on social media towards other delegates, speakers, organisers and staff.',
      ],
    },
    {
      title: 'Anti-harassment',
      paragraphs: [
        'Harassment includes, but is not limited to: Verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion Sexual images in public spaces Deliberate intimidation, stalking, or following Harassing photography or recording Sustained disruption of talks or other events Inappropriate physical contact Invasion of personal space Unwelcome sexual attention Advocating for, or encouraging, any of the above behaviour.',
      ],
    },
    {
      title: 'Enforcement',
      paragraphs: [
        'Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behaviour, event organisers retain the right to take any actions to keep the event a welcoming environment for all participants. This includes warning the offender or expulsion from the conference with no refund. Event organisers may take action to address anything designed to, or with the clear impact of, disrupting the event or making the environment hostile for any participants. We expect participants to follow these rules at all event venues and event-related social activities. We think people should follow these rules outside event activities too!',
      ],
    },
    {
      title: 'Inclusive language',
      paragraphs: [
        'In our commitment to a harassment-free and inclusive environment we strongly believe it’s important to pay attention to harmful language patterns.',
      ],
    },
  ];
}
