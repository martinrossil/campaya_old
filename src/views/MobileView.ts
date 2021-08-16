import { ScrollContainer, VerticalLayout } from 'enta';
import SignupForm from '../components/form/SignupForm';
import CampayaLogo from '../components/graphics/CampayaLogo';
import KenniReview from '../components/reviews/KenniReview';
import KiaReview from '../components/reviews/KiaReview';
import TrineReview from '../components/reviews/TrineReview';
import CustomerSupport from '../components/support/CustomerSupport';
import FAQText from '../components/support/FAQText';
import QuestionAnswers from '../components/support/QuestionAnswers';
import CampayaUSP from '../components/text/CampayaUSP';
import UniqueSellingPoints from '../components/unique/UniqueSellingPoints';

export default class MobileView extends ScrollContainer {
    public constructor() {
        super();
        this.name = 'MobileView';
        this.percentWidth = 100;
        this.percentHeight = 100;
        this.paddingX = 24;
        this.paddingY = 48;
        this.layout = new VerticalLayout(56, 'center');
        this.addElements([
            new CampayaLogo(300, 55),
            new CampayaUSP(21, 'Alle sommerhuse samlet ét sted'),
            new UniqueSellingPoints(24, 0),
            new SignupForm(),
            new KenniReview(),
            new TrineReview(),
            new KiaReview(),
            new FAQText(),
            new QuestionAnswers(),
            new CustomerSupport()
        ]);
    }
}
customElements.define('mobile-view', MobileView);
