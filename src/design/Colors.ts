import { Color, IColor } from 'enta';

export default class Colors {
    public static TRANSPARENT: IColor = new Color(0, 0, 0, 0.0);
    public static SHADOW_BLACK: IColor = new Color(0, 0, 0, 0.3);
    public static SHADOW_BLACK_MEDIUM: IColor = new Color(0, 0, 0, 0.1);
    public static WHITE: IColor = new Color(0, 100, 100);
    public static BLACK: IColor = new Color(0, 0, 0);
    public static BACKGROUND: IColor = new Color(44, 30, 93);
    public static PRIMARY_GREEN: IColor = new Color(161, 100, 33);
    public static PRIMARY_GREEN_DARK: IColor = new Color(161, 100, 23);
    public static TEXT_COLOR: IColor = new Color(48, 34, 15);
    public static BUTTON_TEXT_COLOR: IColor = new Color(0, 0, 13);
    public static TEXT_COLOR_DULLED: IColor = new Color(48, 13, 31);
    public static TEXT_COLOR_MUTED: IColor = new Color(0, 0, 24);
    public static INPUT_BG_COLOR: IColor = new Color(48, 16, 94);
    public static PAPER_COLOR: IColor = new Color(45, 22, 89);
    // public static USP_COLOR: IColor = new Color(0, 0, 24);
}
