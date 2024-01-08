import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, TeamComponent],
  template: `
    <div class="relative py-16 overflow-hidden bg-white">
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-3xl">
        <div class="mx-auto text-lg">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500">
            <span class="font-serif text-6xl text-black"> NG</span>Rome event is the biggest International Angular Conference in Italy, helping bring together ideas and developers from all the corners of Italy and Europe.

The community is born by a group of passionate devs, JavaScript lovers, and enthusiastic developer that use the Angular framework.

Our mission is to connect Italian developers to the global community.

Fostering new relationships within Italy, and across borders. Simultaneously develop new skills and having moments of fun.
          </blockquote>
        </div>
        <div class="mx-auto mt-24 prose prose-lg text-slate-500 prose-indigo">
          <h3 class="mt-12 font-serif text-2xl font-bold leading-6 text-black">STAY INFORMED</h3>
          <p class="mt-6 text-lg text-slate-500">
            Follow us on <a href="https://twitter.com/ngromeconf" target="_blank">Twitter</a>, 
            <a href="https://www.linkedin.com/company/ngrome" target="_blank">Linkedin</a>, 
            <a href="https://www.youtube.com/@ngromeconf4784" target="_blank">Youtube</a> and <a href="https://www.instagram.com/ngromeconf/?hl=it" target="_blank">Instagram</a>!
          </p>
          
          

          
          
        </div>
      </div>
      <app-team></app-team>
    </div>
  `,
  styles: [
  ]
})
export class ContentComponent {

}
