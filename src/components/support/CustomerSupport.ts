import HorizontalContainer from '../containers/HorizontalContainer';
import AvatarImage from '../reviews/AvatarImage';
import ContactText from './ContactText';

export default class CustomerSupport extends HorizontalContainer {
    public constructor() {
        super(16, 'middle');
        this.name = 'CustomerSupport';
        this.addElements([
            new AvatarImage('freja.jpg', 'Campaya kundeservice'),
            new ContactText()
        ])
    }
}
customElements.define('customer-support', CustomerSupport);
