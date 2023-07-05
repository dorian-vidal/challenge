import Vue from "vue";

// import Page from '~/components/ContentType/Page.vue';
// Vue.component('page', Page);

// Base
import UseSvg from "~/components/Base/UseSvg.vue";
import BigLetter from "~/components/Base/BigLetter.vue";
import Testimonial from "~/components/Base/Testimonial.vue";
import TestimonialPro from "~/components/Base/TestimonialPro.vue";
import FAQItem from "~/components/Base/FAQItem.vue";
import Member from "~/components/Base/Member.vue";
import InputText from "~/components/Base/InputText.vue";
import TextArea from "~/components/Base/TextArea.vue";
import TarifItem from "~/components/Base/TarifItem.vue";
import TarifAdvantage from "~/components/Base/TarifAdvantage.vue";
import GaranteeItem from "~/components/Base/GaranteeItem.vue";

Vue.component("base-use-svg", UseSvg);
Vue.component("base-big-letter", BigLetter);
Vue.component("base-testimonial", Testimonial);
Vue.component("base-faq-item", FAQItem);
Vue.component("base-testimonial-pro", TestimonialPro);
Vue.component("base-member", Member);
Vue.component("base-input-text", InputText);
Vue.component("base-text-area", TextArea);
Vue.component("base-tarif-item", TarifItem);
Vue.component("base-tarif-advantage", TarifAdvantage);
Vue.component("base-garantee-item", GaranteeItem);

// CORE

import Slider from "~/components/Core/Slider.vue";
import ActiveOnVisible from "~/components/Core/ActiveOnVisible";

Vue.component("core-slider", Slider);
Vue.component("core-aov", ActiveOnVisible);

// COMMON (layout, Header, footer etc..)

import Header from "~/components/Common/Header.vue";
import Nav from "~/components/Common/Nav.vue";
import Sidebar from "~/components/Common/Sidebar.vue";
import Modal from "~/components/Common/Modal.vue";
import Card from "~/components/Common/Card.vue";
import Form from "~/components/Common/Form.vue";
import SvgIcons from "~/components/Common/SvgIcons.vue";

Vue.component("c-header", Header);
Vue.component("c-sidebar", Sidebar);
Vue.component("c-nav-menu", Nav);
Vue.component("c-modal", Modal);
Vue.component("c-card", Card);
Vue.component("c-form", Form);
Vue.component("c-svg-icons", SvgIcons);

// STRATES

import StrateHeroHome from "~/components/Strates/StrateHeroHome.vue";
import StrateHero from "~/components/Strates/StrateHero.vue";
import StrateCatchPhrase from "~/components/Strates/StrateCatchPhrase.vue";
import StrateBigTitle from "~/components/Strates/StrateBigTitle.vue";
import StrateAdvantages from "~/components/Strates/StrateAdvantages.vue";
import StrateReservations from "~/components/Strates/StrateReservations.vue";
import StrateGarantee from "~/components/Strates/StrateGarantee.vue";
import StrateTestimonials from "~/components/Strates/StrateTestimonials.vue";
import StrateManageRace from "~/components/Strates/StrateManageRace.vue";
import StrateCities from "~/components/Strates/StrateCities.vue";
import StrateText from "~/components/Strates/StrateText.vue";
import StrateFAQ from "~/components/Strates/StrateFAQ.vue";
import StratePartners from "~/components/Strates/StratePartners.vue";
import StrateTestimonialsPro from "~/components/Strates/StrateTestimonialsPro.vue";
import StrateMember from "~/components/Strates/StrateMember.vue";
import StrateTarif from "~/components/Strates/StrateTarif.vue";

Vue.component("strate-hero-home", StrateHeroHome);
Vue.component("strate-hero", StrateHero);
Vue.component("strate-catchphrase", StrateCatchPhrase);
Vue.component("strate-big-title", StrateBigTitle);
Vue.component("strate-advantages", StrateAdvantages);
Vue.component("strate-reservations", StrateReservations);
Vue.component("strate-garantee", StrateGarantee);
Vue.component("strate-testimonials", StrateTestimonials);
Vue.component("strate-manage-race", StrateManageRace);
Vue.component("strate-cities", StrateCities);
Vue.component("strate-text", StrateText);
Vue.component("strate-faq", StrateFAQ);
Vue.component("strate-partners", StratePartners);
Vue.component("strate-testimonials-pro", StrateTestimonialsPro);
Vue.component("strate-tarif", StrateTarif);
Vue.component("strate-member", StrateMember);

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
