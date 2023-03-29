import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/pages/main-image/page-image.component';
import { MainContentComponent } from '../components/about/main-content/main-content.component';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <app-page-head
      [title]="'About NGRome & The TEAM'"
      [subtitle]="
        'NG-Rome is a non-profit community conference run by a team of volunteers.
            We are all active members of the tech community, and run or contribute to various free local meetups, workshops, and education initiatives.'
      "
    />
    <app-page-image
      [image]="
        'https://lh3.googleusercontent.com/pAkRlaOD0E7cxHZwMPT0Ul5ksK-EqVrdV59ZiCJM5QQURLBK0WxLj11deR2alZJJ5UZV2WR3VFkY0FtwUfn8DS5djqIMz52h3VTEgO1JuSAa9lPUeFHCgzAUi2yXtIfe7TB1bHPg_p2ZPsSPAaJpFRYTyQoxMEmZ8_MRheaaQdZ-8c9AaU8fWmVU1tyYhLSRDeLT8A2GIpOBn9xAxqxKBDf-p8DfgROq_NQNROaPLMpjrjvI8z9G6RUFvC-5emMdvXKiHchL8AIfzSLHrb5LusStbdSj4Vn5WauHRWZekWhm8n6H7qhm3du6kwcP8ULBOs73wf_E_IWUvB-7AFVR0TlnGeMDacj3ArvbUG2IaOeughcUFvqquvs3UXRJ-Yr_A21fMVm3H1z423-GFrZuQQuvbhXurvaiIYJIk5f6etjwOdnIsLpZHTj6DXHkQiJ4No6sh7K4tbGbzIoxLbpZ1IDLzVocqz8RIV6Dr-x-oljUuL7US6Bf3j-yIoKSvG_Qk9QsFgygVUdxjzuC9LcpYlqzLoYgG4xHigp3KDWCO_m8oChc2lowFhVmlfimSkbdKcU4LueTTOWLSYj0PPgMXSWcch80FniiHvwzw24aMenv9bNUtXzwhWZ2wxjtQxBJjtuQNRpJGvMXvHnATDw2-yAt_-KutDZc0IFKDbuKhSTEd1E-JuEvo3ovsK9LvHaHN7BJAuGybkqk6Lm7lRxgVxfOI_PUYb5WPLx0oi6bNnRAw3yyShsNTR5OHUZESN1eonCw5lqDbsCH0vlA8FudgNb7b9wkno2Cd6KL9HjpES79lDJOXbhRTkdpuUq1DGW1l5_bmcmqVTo8f6FQglCd_V2JEJZvTjfwdh_4AlUWXz5VEP4qdr9ktb0Gh2IlSRGauUFLkwO-rK2M_IKXM5_AAt1k9wLugCAjye8vQzO7kVnG0joZ=w1569-h1046-no?authuser=0'
      "
    />
    <app-main-content />
  `,
  imports: [PageHeadComponent, PageImageComponent, MainContentComponent],
})
export default class AboutComponent {}
