import QuestionAnswers from '../support/QuestionAnswers';
import HorizontalContainer from './HorizontalContainer';
import SupportContainer from './SupportContainer';

export default class QuestionsContainer extends HorizontalContainer {
    public constructor() {
        super(24);
        this.name = 'QuestionsContainer';
        this.percentWidth = 100;
        this.paddingX = 24;
        this.paddingY = 0;
        this.addElements([
            new SupportContainer(),
            new QuestionAnswers()
        ]);
    }
}
customElements.define('questions-container', QuestionsContainer);
