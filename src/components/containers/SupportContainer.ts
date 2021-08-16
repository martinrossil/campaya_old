import CustomerSupport from '../support/CustomerSupport';
import FAQText from '../support/FAQText';
import VerticalContainer from './VerticalContainer';

export default class SupportContainer extends VerticalContainer {
    public constructor() {
        super(32);
        this.name = 'SupportContainer';
        this.percentWidth = 100;
        this.addElements([
            new FAQText(),
            new CustomerSupport()
        ]);
    }
}
customElements.define('support-container', SupportContainer);
