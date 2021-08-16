import SignupForm from '../form/SignupForm';
import UniqueSellingPoints from '../unique/UniqueSellingPoints';
import HorizontalContainer from './HorizontalContainer';

export default class FormUniqueContainer extends HorizontalContainer {
    public constructor() {
        super();
        this.name = 'FormUniqueContainer';
        this.percentWidth = 100;
        this.addElements([
            new SignupForm(),
            new UniqueSellingPoints()
        ]);
    }
}
customElements.define('form-unique-container', FormUniqueContainer);
