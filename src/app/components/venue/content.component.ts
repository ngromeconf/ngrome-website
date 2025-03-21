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
            Key Features:

            <ul>
              <li>
                <b> 🎯 Central Location:</b> Enjoy the convenience of a central
                location, with excellent transport links and proximity to key
                landmarks.
              </li>
              <li>
                <b>👨‍💻 Versatile Spaces:</b> Our flexible spaces can accommodate
                a variety of events, from conferences and meetings to
                exhibitions and workshops.
              </li>
              <li>
                <b>✨ Modern Facilities:</b> Benefit from state-of-the-art
                audiovisual equipment, Wi-Fi connectivity, and professional
                support services.
              </li>
            </ul>
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
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Centro Congressi Frentani, Via dei Frentani, 4, 00185 Roma RM&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        <br />
        <br />

        <h1
          class="mb-8 font-sans uppercase text-4xl font-bold tracking-tight text-black md:text-6xl text-left"
        >
          Where to Stay
        </h1>
        <div class="mx-auto text-lg">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500 text-left">
            <span class="font-serif text-6xl text-black"> T</span>he area
            surrounding the Centro Congressi Frentani offers a wide range of
            accommodation options to suit all budgets and preferences.
            <br />Here are some suggestions: <br /><br />
            <ul class="list-disc">
              <li>
                <b>Near Termini Station:</b>This area boasts numerous hotels,
                from budget-friendly options to upscale establishments,
                providing excellent connectivity to the rest of the city.
              </li>
              <li>
                <b> University area "La Sapienza":</b> This area also present a
                lot of Hotel and B&B.
              </li>
              <li>
                <b>Castro Pretorio Area:</b> Here it's possible to find a lot of
                Hotel and B&B.
              </li>
            </ul>
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
              src="https://res.cloudinary.com/dp1gwjz5w/image/upload/v1742567416/2025/congressi-frentani-1_sfte12.jpg"
              alt="Versatile Spaces"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">
                Modern Facilities
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
              src="https://res.cloudinary.com/dp1gwjz5w/image/upload/v1742567407/2025/auditorium_htcdff.jpg"
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
              src="https://res.cloudinary.com/dp1gwjz5w/image/upload/v1742567411/2025/come_arrivare.2_ugqjnc.jpg"
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
              <b>By Car:</b> <br />From the North: Take the Tiburtina exit from
              the GRA ring road towards Roma Centro. Continue straight towards
              "La Sapienza" University (Piazzale Aldo Moro). The Centro
              Congressi Frentani is 200 meters away. From the South: Take the
              Prenestina exit from the GRA ring road towards Roma Centro.
              Continue towards Porta Maggiore, then follow signs to Termini
              Station. The Centro Congressi is a 5-minute drive from there
            </p>
            <br />
            <p class="mt-6 text-lg text-slate-500">
              <b>Bus and Metro:</b> <br />
              ATAC Bus Lines: 492, 71, 310. <br />
              Line A: Termini Station stop. <br />
              Line B: Castro Pretorio stop. <br />
            </p>
            <p class="mt-6 text-lg text-slate-500">
              <b>By Train:</b>
              <br />
              From Fiumicino Airport: Metropolitan Railway FM1 <br />
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
