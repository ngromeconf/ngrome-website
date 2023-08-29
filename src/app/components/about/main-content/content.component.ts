import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
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
            Follow us on Twitter and Instagram!
          </p>
          
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">A taste of <a href="https://twitter.com/hashtag/NGRomeMMXIX?src=hash&amp;ref_src=twsrc%5Etfw">#NGRomeMMXIX</a> 🇮🇹 <a href="https://t.co/9gaoN3AJer">pic.twitter.com/9gaoN3AJer</a></p>&mdash; NGRomeConf (@ngromeconf) <a href="https://twitter.com/ngromeconf/status/1131316168487317505?ref_src=twsrc%5Etfw">May 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

          
          
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ContentComponent {

}