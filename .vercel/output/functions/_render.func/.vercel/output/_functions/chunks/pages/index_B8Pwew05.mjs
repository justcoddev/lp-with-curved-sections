/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, h as createAstro, g as addAttribute, j as renderHead, k as renderComponent } from '../astro_BiniDbR8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$5 = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="flex text-n-very-pale-blue items-center font-normal gap-x-2 py-10 md:py-2 md:px-4 md:text-base hover:bg-white/10 transition"${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/components/SocialPill.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center px-7 py-4"> <img class="w-auto h-5" src="/public/images/logo.svg" alt="logo"> <a class="font-semibold text-light-pink px-6 py-1 border-[2px] border-light-pink rounded-full" href="">Try It Free</a> </header>`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=Poppins:wght@700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$CtaButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CtaButton;
  return renderTemplate`${maybeRenderHead()}<a class="bg-pink px-12 py-3 my-10 inline-block text-xs font-semibold text-n-very-pale-blue rounded-full shadow-xl"${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/components/Cta-button.astro", void 0);

const $$Astro$2 = createAstro();
const $$FacebookIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FacebookIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path> </svg>`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/icons/FacebookIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$InstagramIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg>`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/icons/InstagramIcon.astro", void 0);

const $$Astro = createAstro();
const $$TwitterIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TwitterIcon;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/icons/TwitterIcon.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LP with curved sections" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="font-heading text-xl text-n-very-dark-cyan px-14 pt-32 lg:text-2xl">
Build The Community Your Fans Will Love
</h1> <p class="text-xs text-wrap font-medium px-14 py-5 text-n-very-dark-cyan lg:px-48">
Huddle re-imagines the way we build communities. You have a voice, but so
			does your audience. Create connections with your users as you engage in
			genuine discussion.
</p> ${renderComponent($$result2, "CtaButton", $$CtaButton, {}, { "default": ($$result3) => renderTemplate` Get Started For Free ` })} <img class="my-[7rem] w-auto h-auto mx-auto px-12" src="//public/images/screen-mockups.svg" alt="screen-mockups "> <section class="md:flex md:justify-around"> <div class="flex flex-col text-center mt-[7rem] md:mt-0"> <div class=""> <img class="w-auto h-4 px-28 md:px-1" src="/public/images/icon-communities.svg" alt=""> <h2 class="text-6xl font-bold text-n-very-dark-cyan">1.4k+</h2> <p class="text-sm font-semibold text-n-very-dark-cyan/50">
Communities Formed
</p> </div> </div> <div class="flex flex-col text-center mt-[7rem] md:mt-0"> <div class="px-10"> <img class="w-auto h-4 px-16 md:px-1" src="/public/images/icon-messages.svg" alt=""> <h2 class="text-6xl font-bold text-n-very-dark-cyan">2.7m+</h2> <p class="text-sm font-semibold text-n-very-dark-cyan/50 w-14
					mx-auto">
Messages Sent
</p> </div> </div> </section> <section> <img class="w-[100%] h-auto md:hidden" src="/public/images/bg-section-top-mobile-1.svg" alt=""> <img class="w-[100%] h-auto hidden md:block" src="/public/images/bg-section-top-desktop-1.svg" alt=""> <div class="bg-n-very-pale-blue pb-12 flex flex-col md:flex-row"> <img class="bg-n-very-pale-blue w-auto h-auto mx-auto px-12 pt-28 md:px-auto md:pt-auto md:pt-0 md:w-[50%] order-2" src="/public/images/illustration-grow-together.svg" alt=""> <div class="order-1 md:py-auto md:flex md:flex-col md:justify-center md:px-0 md:text-left md:gap-1"> <h2 class="font-heading text-xl px-14 pt-32 md:pt-0">
Grow Together
</h2> <p class="text-xs text-wrap font-medium px-14 py-5 md:px-0 md:pl-14">
Generate meaningful discussions with your audience and build a
						strong, loyal community. Think of the insightful conversations you
						miss out on with a feedback form.
</p> </div> </div> <img class="w-[100%] h-auto md:hidden" src="/public/images/bg-section-bottom-mobile-1.svg" alt=""> <img class="w-[100%] h-auto hidden md:block" src="/public/images/bg-section-bottom-desktop-1.svg" alt=""> </section> <section> <div class="pb-12 flex flex-col md:flex-row"> <img class="w-auto h-auto mx-auto px-12 pt-28 md:px-auto md:pt-auto md:pt-0 md:w-[50%] order-1" src="/public/images/illustration-flowing-conversation.svg" alt=""> <div class="order-2 md:py-auto md:flex md:flex-col md:justify-center md:px-0 md:text-left md:gap-1"> <h2 class="font-heading text-xl px-14 pt-32 md:pt-0 md:px-0">
Flowing Conversations
</h2> <p class="text-xs text-wrap font-medium px-14 py-5 md:px-0 md:pr-14">
You wouldn't paginate a conversation in real life, so why do it
						online? Our threads have just-in-time loading for a more natural
						flow.
</p> </div> </div> </section> <section> <img class="w-[100%] h-auto md:hidden" src="/public/images/bg-section-top-mobile-2.svg" alt=""> <img class="w-[100%] h-auto hidden md:block" src="/public/images/bg-section-top-desktop-2.svg" alt=""> <div class="bg-n-very-pale-blue pb-12 flex flex-col md:flex-row"> <img class="bg-n-very-pale-blue w-auto h-auto mx-auto px-12 pt-28 md:px-auto md:pt-auto md:pt-0 md:w-[50%] order-2" src="/public/images/illustration-your-users.svg" alt=""> <div class="order-1 md:py-auto md:flex md:flex-col md:justify-center md:px-0 md:text-left md:gap-1"> <h2 class="font-heading text-xl px-14 pt-32 md:pt-0">Your Users</h2> <p class="text-xs text-wrap font-medium px-14 py-5 md:px-0 md:pl-14">
It takes no time at all to integrate Huddle with your app's
						authentication solution. This means, once signed in to your app,
						your users can start chatting immediately.
</p> </div> </div> <img class="w-[100%] h-auto md:hidden" src="/public/images/bg-section-bottom-mobile-2.svg" alt=""> <img class="w-[100%] h-auto hidden md:block" src="/public/images/bg-section-bottom-desktop-2.svg" alt=""> </section> <h2 class="font-heading text-xl px-14 pt-7 pb-7">
Ready To Build Your Community?
</h2> ${renderComponent($$result2, "CtaButton", $$CtaButton, {}, { "default": ($$result3) => renderTemplate` Get Started For Free ` })} <footer> <img class="w-[100%] h-auto lg:w-screen lg:h-full lg:px-0 lg:py-0" src="/public/images/bg-footer-top-mobile.svg" alt=""> <div class="flex flex-col md:flex-row bg-n-very-dark-cyan lg:px-0 lg:py-0"> <section class="bg-n-very-dark-cyan md:order-2"> <h2 class="uppercase text-xl font-semibold px-10 text-n-very-pale-blue pt-20 text-left">
Newsletter
</h2> <p class="text-sm font-medium pl-10 pr-8 py-5 text-n-very-pale-blue text-left">
To recieve tips on how to grow your community, sign up to our weekly
						newsletter. We’ll never send you spam or pass on your email address
</p> <form class="md:flex md:flex-row"> <div class="pl-10 pr-8 h-12 md:pr-0 md:my-auto"> <input class="w-full h-14 rounded-md text-sm" type="email" id="email" pattern=".+@example\.com" size="30" required> </div> <div class="mt-7 text-right px-8"> <a type="submit" href="#" class="bg-pink px-12 py-3 text-sm font-semibold text-n-very-pale-blue rounded-md shadow-xl">
Subscribe
</a> </div> </form> </section> <section class="bg-n-very-dark-cyan mt-32 px-10 md:order-1 md:mt-0 md:my-auto"> <img class="w-auto h-8 mr-auto md:p-0" src="/public/images/logo-white.svg" alt=""> <p class="text-sm font-medium py-5 text-n-very-pale-blue text-left md:text-wrap md:pr-32">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
</p> <div class="mt-7 pb-10 flex flex-col gap-7 text-n-very-pale-blue text-sm font-medium"> <div class="flex gap-6 items-center content-center"> <img class="size-4" src="/public/images/icon-phone.svg" alt=""> <a href="">Phone: +1-543-123-4567</a> </div> <div class="flex gap-6 items-center content-center"> <img class="w-5 h-4" src="/public/images/icon-email.svg" alt=""> <a href=""> example@huddle.com</a> </div> </div> <section class="bg-n-very-dark-cyan"> ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FacebookIcon", $$FacebookIcon, { "class": "size-6 md:size-6" })} ${renderComponent($$result3, "InstagramIcon", $$InstagramIcon, { "class": "size-6 md:size-6" })} ${renderComponent($$result3, "TwitterIcon", $$TwitterIcon, { "class": "size-6 md:size-6" })} ` })} </section> </section> </div> </footer> <p class="attribution font-normal text-sm px-2">
Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/justcoddev" target="_blank"><strong>justcoddev</strong></a>.
</p> </main> ` })}`;
}, "C:/justcoddev/pages/astro/lp-with-curved-sections/src/pages/index.astro", void 0);

const $$file = "C:/justcoddev/pages/astro/lp-with-curved-sections/src/pages/index.astro";
const $$url = "/astro/lp-with-curved-sections/src/pages";

export { $$Index as default, $$file as file, $$url as url };
