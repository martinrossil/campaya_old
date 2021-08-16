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

    private _mobileView!: MobileView;
    private get mobileView(): MobileView {
        if (!this._mobileView) {
            this._mobileView = new MobileView();
        }
        return this._mobileView;
    }

    private _tabletView!: TabletView;
    private get tabletView(): TabletView {
        if (!this._tabletView) {
            this._tabletView = new TabletView();
        }
        return this._tabletView;
    }

    private _laptopView!: LaptopView;
    private get laptopView(): LaptopView {
        if (!this._laptopView) {
            this._laptopView = new LaptopView();
        }
        return this._laptopView;
    }

    private _desktopView!: DesktopView;
    private get desktopView(): DesktopView {
        if (!this._desktopView) {
            this._desktopView = new DesktopView();
        }
        return this._desktopView;
    }

    private responsiveLayoutMachine: ResponsiveLayoutMachine = new ResponsiveLayoutMachine(this);
}
customElements.define('campaya-app', CampayaApp);
