import Colors from '../../design/Colors';
import VerticalContainer from '../containers/VerticalContainer';
import CampayaLabel from '../text/CampayLabel';
import CampayaInput from './CampayaInput';

export default class FormInput extends VerticalContainer {
    public constructor(label = '', prompt = '') {
        super(16);
        this.name = 'FormInput';
        this.percentWidth = 100;
        this.addElements([
            new CampayaLabel(16, 500, Colors.TEXT_COLOR_DULLED, label),
            new CampayaInput(prompt)
        ]);
    }
}
customElements.define('form-input', FormInput);
