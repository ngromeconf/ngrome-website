import { Component } from '@angular/core';
import { TeamComponent } from '../about/team/team.component';

@Component({
  selector: 'app-venue-content',
  standalone: true,
  imports: [TeamComponent],
  template: `
    <div class="relative overflow-hidden bg-white">
      <div class="relative px-4 mx-auto lg:max-w-3xl">
        <div class="mx-auto text-lg text-left">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500">
            <span class="font-serif text-6xl text-black"> S</span>ince 1973, the
            Midas Palace Hotel has historically been an iconic landmark for
            major events and congresses. Located a few kilometers from the
            center, this prestigious four-star hotel is the perfect combination
            of business and relaxation. Let yourself be enveloped by its
            relaxing and informal atmosphere, suitable for both your pleasure
            trip and your work needs. Select the type of room that best suits
            your needs, or organize your corporate event in a few steps.
          </blockquote>
        </div>
        <br />

        <div style="width: 100%">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Via%20Raffaello%20Sardiello,%2022,%2000165%20Roma%20RM+(Midas%20Palace%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        <br />
        <br />

        <h1
          class="mb-8 font-sans uppercase text-4xl font-bold tracking-tight text-black md:text-6xl text-left"
        >
          Easily Accessible
        </h1>
        <div class="mx-auto text-lg">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500 text-left">
            <span class="font-serif text-6xl text-black"> L</span>ocated near
            Via Aurelia, a few kilometers from Fiumicino Airport, the hotel
            offers easy access to the center of Rome and its many attractions,
            including historical monuments, museums and shopping areas.
          </blockquote>
        </div>
        <br />
      </div>
    </div>
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20"
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        <div>
          <div
            class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://res.cloudinary.com/dp1gwjz5w/image/upload/c_crop,ar_3:4/v1710175743/venue/Hotel-Midas---059--Hotel-Midas-Roma_cm5o3e.jpg"
              alt="Person"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">
                Immerse yourself in the pleasure
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://res.cloudinary.com/dp1gwjz5w/image/upload/c_crop,ar_3:4/v1710175720/venue/Salone-Midas--11---Hotel-Midas-Roma_smjz5h.jpg"
              alt="Person"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">
                Congress Center
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://res.cloudinary.com/dp1gwjz5w/image/upload/c_crop,ar_4:3/v1709832170/venue/kouclpg2l8bkgbsbzkul.jpg"
              alt="Person"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">
                Easily accessible
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
            <p class="mt-6 text-lg text-slate-500">
              <span class="font-serif text-6xl text-black"> B</span>y Car: The
              hotel is easily accessible from the Grande Raccordo Anulare (GRA),
              Exit 1, in the direction of Aurelia/Centro. From Termini Station:
              Take Metro Line A to Cornelia stop, then Bus 246 or 247 and get
              off at the Panorama stop. Cross the pedestrian bridge, and the
              hotel is about 500 meters away. Taxi: You can call +39 06 66 45 or
              use the "itTAXI" app for a convenient ride. From the Hotel to the
              Center of Rome.
            </p>
            <br />
            <p class="mt-6 text-lg text-slate-500">
              <span class="font-serif text-6xl text-black"> B</span>us and
              Metro: Take Bus 246 or 247 from the Aurelia stop (tickets can be
              purchased at the kiosk inside the Human Company Camping or via the
              <a
                href="https://www.mooneygo.it/"
                class="mt-6 text-lg text-slate-500 underline"
                target="_blank"
                >MooneyGo</a
              >
              app) to the Cornelia stop, then use Metro Line A towards Anagnina,
              and get off at your desired stop.
            </p>
          </blockquote>
        </div>

        <div class="mx-auto mt-24 prose prose-lg text-slate-500 prose-indigo">
          <h3 class="mt-12 font-serif text-2xl font-bold leading-6 text-black">
            STAY INFORMED
          </h3>
          <p class="mt-6 text-lg text-slate-500">
            Follow us on
            <a href="https://twitter.com/ngromeconf" target="_blank">Twitter</a
            >,
            <a href="https://www.linkedin.com/company/ngrome" target="_blank"
              >Linkedin</a
            >,
            <a href="https://www.youtube.com/@ngromeconf4784" target="_blank"
              >Youtube</a
            >
            and
            <a
              href="https://www.instagram.com/ngromeconf/?hl=it"
              target="_blank"
              >Instagram</a
            >!
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class VenueContentComponent {}
