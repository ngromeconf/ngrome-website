import { Component } from '@angular/core';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  template: `
    <div class="relative py-16 overflow-hidden bg-white">
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-3xl">
        <div class="mx-auto text-lg">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500">
            <span class="font-serif text-6xl text-black"> S</span>ince 1973, the Midas Palace Hotel has historically been an iconic landmark for major events and congresses.
            Located a few kilometers from the center, this prestigious four-star hotel is the perfect combination of business and relaxation.
            
            Let yourself be enveloped by its relaxing and informal atmosphere, suitable for both your pleasure trip and your work needs.
            
            Select the type of room that best suits your needs, or organize your corporate event in a few steps.
          </blockquote>
        </div>
        <br />

        <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Via%20Raffaello%20Sardiello,%2022,%2000165%20Roma%20RM+(Midas%20Palace%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>

        <br />
        <br />

        <h1
            class="mb-8 font-sans uppercase text-4xl font-bold tracking-tight text-black md:text-6xl text-left"
          >
          Easily Accessible
          </h1>
          <div class="mx-auto text-lg">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500 text-left">
            <span class="font-serif text-6xl text-black"> L</span>ocated near Via Aurelia, a few kilometers from Fiumicino Airport, the hotel offers easy access to the center of Rome and its many attractions, including historical monuments, museums and shopping areas.
          </blockquote>
        </div>
        <br />

       
      </div>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20">

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      <div>
        <div class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://res.cloudinary.com/dp1gwjz5w/image/upload/c_crop,ar_3:4/v1710175743/venue/Hotel-Midas---059--Hotel-Midas-Roma_cm5o3e.jpg" alt="Person" />
          <div class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-1 text-lg font-bold text-gray-100">Oliver Aguilerra</p>
            <p class="mb-4 text-xs text-gray-100">Product Manager</p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Vincent Van Gogh’s most popular painting, The Starry Night.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://res.cloudinary.com/dp1gwjz5w/image/upload/c_crop,ar_3:4/v1710175720/venue/Salone-Midas--11---Hotel-Midas-Roma_smjz5h.jpg" alt="Person" />
          <div class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-1 text-lg font-bold text-gray-100">Marta Clermont</p>
            <p class="mb-4 text-xs text-gray-100">Design Team Lead</p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Amet I love liquorice jujubes pudding croissant I love pudding.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://res.cloudinary.com/dp1gwjz5w/image/upload/c_crop,ar_4:3/v1709832170/venue/kouclpg2l8bkgbsbzkul.jpg" alt="Person" />
          <div class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-1 text-lg font-bold text-gray-100">Anthony Geek</p>
            <p class="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Apple pie macaroon toffee jujubes pie tart cookie caramels.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <div class="relative py-16 overflow-hidden bg-white">
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-3xl">

        <br />
        <h1
            class="mb-8 font-sans uppercase text-4xl font-bold tracking-tight text-black md:text-6xl text-left"
          >
          GET DIRECTIONS
          </h1>
          <div class="mx-auto text-lg">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500 text-left">
            <span class="font-serif text-6xl text-black"> W</span>e will update soon this section.
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
