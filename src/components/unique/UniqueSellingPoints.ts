import Colors from '../../design/Colors';
import VerticalContainer from '../containers/VerticalContainer';
import UniqueSellingPoint from './UniqueSellingPoint';

export default class UniqueSellingPoints extends VerticalContainer {
    public constructor(paddingX = 32, paddingY = 56) {
        super(56);
        this.name = 'UniqueSellingPoints';
        this.paddingX = paddingX;
        this.paddingY = paddingY;
        this.percentWidth = 100;
        this.addElements([
            new UniqueSellingPoint('Kun 20 procent i kommission', 'Markedets ubestridt laveste kommissionssats. Få hertil 42.700 kr. i skattefri indtjening.'),
            new UniqueSellingPoint('Meget nemt at kombinere med eget brug', 'Du bestemmer fuldstændig selv, hvornår og hvor meget du ønsker at udleje dit sommerhus.'),
            new UniqueSellingPoint('Service på et helt nyt niveau', 'Vores professionelle servicepartnere sikrer dig banebrydende god servicering af dit sommerhus, så du kan føle dig helt tryg.')
        ]);
    }
}
customElements.define('unique-selling-points', UniqueSellingPoints);
