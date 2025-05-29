import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function About() {
  return (
    <section id="about" className="pb-5 min-h-screen bg-[#333366] mx-auto py-16 px-6">
      <h2 className="text-4xl font-semibold mb-6 border-b-4 inline-block text-white">About Me</h2>

      <div className="flex flex-col  space-y-6 text-lg leading-relaxed max-w-3xl mx-auto text-white">
        <h2 className="text-2xl font-semibold mb-6 text-left inline-block text-white">Professional Background</h2>
        <p className="text-lg text-left mb-9" >I’m Alondra, a CSUN Computer Science graduate, who is passionate about frontend development focused on building accessible and user-friendly web apps.
          Most of my recent work involves React, Vite, and Firebase, and I'm currently trying to continue learning more frameworks and UI/UX techniques. I am also trying to
          grow as a backend developer to become a better and reliable fullstack programmer. Some languages I am familiar with are Java, Python, Html, Css,  and Javascript.
          Some frameworks, tools, and platforms I'm familar with are React, Vite, MongoDB, Firebase, and Jira.
          Although I may have not worked in a professional enviornment, a few of my soft skills that I believe are worth highlighting are my communication and collaboration skills that I have cultivated through
          working in general.
        </p>
        <h2 className="text-2xl font-semibold text-left mb-6 text-center inline-block text-white">Who I Really Am </h2>
        <p className="text-lg text-left mb-9">If I didn't have to speak professionally, I would say I'm just a first generation hispanic college graduate trying to make something of myself and trying to make my parents proud and their sacrifices mean something.
          I would also say I'm just a girl trying to somehow prove that I can hang and manage myself in a field mostly run by men. I may not be perfect or entirely great at something, but I know for a fact
          I will never give up or get discouraged in trying to make something happen or work because, I've made it this far being me.
        </p>
        <h2 className="text-2xl font-semibold text-left mb-6  inline-block text-white">Hobbies & Interests</h2>
        <ul className="list-disc space-y-4 text-left">
          <li>
            I enjoy playing video games with my friends like Overwatch, we play nearly everyday.
          </li>
          <li>
            I enjoy going out with said group of friends, we love eating out and watching movies. Certified AMC A-listers.
          </li>
          <li>
            A new hobby I recently picked up is rollerskating.
          </li>
          <li>
            On the rare chance I have downtime, I make friendship bracelets for all my buddies.
          </li>
          <li>
            Extra downtime, I spend volunteering for my old highschool's music department that I was department president for 2 years in a row so I have a soft spot for it.
          </li>
          <li>My most time consuming and favorite interest and hobby has to be caring for my pets.
            <div className="mt-4">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                className="w-full max-w-md rounded-lg overflow-hidden"
              >
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/son.jpg`} alt="Cat 1" className="w-[400px] h-[400px] object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/mars.jpg`} alt="Cat 2" className="w-[400px] h-[400px]  object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/pluto.jpg`} alt="Cat 3" className="w-[400px] h-[400px]  object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/mpm.jpg`} alt="cats" className="w-[400px] h-[400px]  object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/michi.jpg`} alt="Cat 4" className="w-[400px] h-[400px]  object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/mopicaro.jpg`} alt="Cat 5" className="w-[400px] h-[400px]  object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/mp.jpg`} alt="Cats 2" className="w-[400px] h-[400px] l object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/funnysunny.jpg`} alt="Cat 1" className="w-[400px] h-[400px]  object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${import.meta.env.BASE_URL}images/morepicaro.jpg`} alt="Cat 5" className="w-[400px] h-[400px]  object-cover rounded-lg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
