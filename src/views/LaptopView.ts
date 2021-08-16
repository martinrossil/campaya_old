import { ScrollContainer, VerticalLayout } from 'enta';
import FormUniqueContainer from '../components/containers/FormUniqueContainer';
import QuestionsContainer from '../components/containers/QuestionsContainer';
import ReviewsContainer from '../components/containers/ReviewsContainer';
import CampayaLogo from '../components/graphics/CampayaLogo';
import CampayaUSP from '../components/text/CampayaUSP';

export default class LaptopView extends ScrollContainer {
    public constructor() {
        super();
        this.name = 'LaptopView';
        this.percentWidth = 100;
        this.percentHeight = 100;
        this.paddingX = 24;
        this.paddingY = 48;
        this.layout = new VerticalLayout(40, 'center');
        this.addElements([
            new CampayaLogo(452, 83),
            new CampayaUSP(30, 'Alle sommerhuse samlet ét sted'),
            new FormUniqueContainer(),
            new ReviewsContainer(),
            new QuestionsContainer()
        ]);
    }
}
customElements.define('laptop-view', LaptopView);
