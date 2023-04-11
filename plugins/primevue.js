import PrimeVue from 'primevue/config'
import { defineNuxtPlugin } from "#app";

import Tooltip from 'primevue/tooltip';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import OverlayPanel from 'primevue/overlaypanel';
import Tag from 'primevue/tag';
import Card from 'primevue/card';
import ToggleButton from 'primevue/togglebutton';
import ColorPicker from 'primevue/colorpicker';
import ScrollTop from 'primevue/scrolltop';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import BadgeDirective from 'primevue/badgedirective';
import Calendar from 'primevue/calendar';

import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';

// adds services and components to an app that's already mounted
export default defineNuxtPlugin((nuxtApp) => {

        nuxtApp.vueApp.use(ConfirmationService)
        nuxtApp.vueApp.use(ToastService)
        nuxtApp.vueApp.directive('tooltip', Tooltip)
        nuxtApp.vueApp.directive('badge', BadgeDirective)
        nuxtApp.vueApp.component('p-data-table', DataTable)
        nuxtApp.vueApp.component('p-column', Column)
        nuxtApp.vueApp.component('p-button', Button)
        nuxtApp.vueApp.component('p-dropdown', Dropdown)
        nuxtApp.vueApp.component('p-input-text', InputText)
        nuxtApp.vueApp.component('p-dialog', Dialog)
        nuxtApp.vueApp.component('p-overlay-panel', OverlayPanel)
        nuxtApp.vueApp.component('p-toast', Toast)
        nuxtApp.vueApp.component('p-confirmdialog', ConfirmDialog)
        nuxtApp.vueApp.component('p-confirmpopup', ConfirmPopup)
        nuxtApp.vueApp.component('p-tag', Tag)
        nuxtApp.vueApp.component('p-card', Card)
        nuxtApp.vueApp.component('p-togglebutton', ToggleButton)
        nuxtApp.vueApp.component('p-colorpicker', ColorPicker)
        nuxtApp.vueApp.component('p-scrolltop', ScrollTop)
        nuxtApp.vueApp.component('p-accordion', Accordion)
        nuxtApp.vueApp.component('p-accordiontab', AccordionTab)
        nuxtApp.vueApp.component('p-input-calendar', Calendar)
        nuxtApp.vueApp.use(PrimeVue, {
            ripple: true
        })

})


