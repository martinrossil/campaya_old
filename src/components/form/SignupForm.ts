import { VerticalLayout } from 'enta';
import Colors from '../../design/Colors';
import Shadows from '../../design/Shadows';
import PrimaryButton from '../buttons/PrimaryButton';
import FormInput from './FormInput';
import PaperContainer from '../graphics/PaperContainer';
import CampayaLabel from '../text/CampayLabel';

export default class SignupForm extends PaperContainer {
    public constructor() {
        super(Colors.WHITE);
        this.name = 'SignupForm';
        this.percentWidth = 100;
        this.addFilter(Shadows.LARGE);
        this.paddingX = 32;
        this.paddingY = 56;
        this.layout = new VerticalLayout(40, 'center');
        this.addElements([
            new CampayaLabel(28, 500, Colors.PRIMARY_GREEN, 'Udlej dit sommerhus'),
            new CampayaLabel(16, 400, Colors.TEXT_COLOR, 'Opret dit sommerhus med få klik lige her'),
            new FormInput('Navn', 'Fulde navn'),
            new FormInput('Email', 'Email'),
            new FormInput('Telefon', 'Telefon'),
            new PrimaryButton()
        ]);
    }
}
customElements.define('signup-form', SignupForm);
