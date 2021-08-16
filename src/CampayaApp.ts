import { ApplicationElement } from 'enta';
import MobileView from './views/MobileView';
import TabletView from './views/TabletView';
import LaptopView from './views/LaptopView';
import DesktopView from './views/DesktopView';
import ICampayaApp from './ICampayaApp';
import Colors from './design/Colors';
import ResponsiveLayoutMachine from './machines/ResponsiveLayoutMachine'

export default class CampayaApp extends ApplicationElement implements ICampayaApp {
    public constructor() {
        super();
        this.backgroundColor = Colors.BACKGROUND;
    }

    public mobile(): void {
        this.removeElements();
        this.addElement(this.mobileView);
    }

    public tablet(): void {
        this.removeElements();
        this.addElement(this.tabletView);
    }

    public laptop(): void {
        this.removeElements();
        this.addElement(this.laptopView);
    }

    public desktop(): void {
        this.removeElements();
        this.addElement(this.desktopView);
    }

    private mobileView: MobileView = new MobileView();
    private tabletView: TabletView = new TabletView();
    private laptopView: LaptopView = new LaptopView();
    private desktopView: DesktopView = new DesktopView();

    private responsiveLayoutMachine: ResponsiveLayoutMachine = new ResponsiveLayoutMachine(this);
}
customElements.define('campaya-app', CampayaApp);
