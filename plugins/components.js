import Vue from "vue";

// Base

// CORE

// COMMON (layout, Header, footer etc..)

import Header from "~/components/Common/Header.vue";
import Card from "~/components/Common/Card.vue";

Vue.component("c-header", Header);
Vue.component("c-card", Card);

// STRATES

import StrateHeroHome from "~/components/Strates/StrateHeroHome.vue";
import StrateHero from "~/components/Strates/StrateHero.vue";
import StrateInstance from "~/components/Strates/StrateInstance.vue";
import StrateChallenge from "~/components/Strates/StrateChallenge.vue";

Vue.component("strate-hero-home", StrateHeroHome);
Vue.component("strate-hero", StrateHero);
Vue.component("strate-instance", StrateInstance);
Vue.component("strate-challenge", StrateChallenge);

// COMPONENTS
