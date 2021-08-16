import { BoxShadowFilter, IFilter, ShadowFilter } from 'enta';
import Colors from './Colors';

export default class Shadows {
    public static LARGE: IFilter = new BoxShadowFilter(0, 3, 40, 0, Colors.SHADOW_BLACK_MEDIUM);
    public static MEDIUM: IFilter = new BoxShadowFilter(0, 2, 20, 0, Colors.SHADOW_BLACK_MEDIUM);
    public static REAL: IFilter = new ShadowFilter(0, 5, 10, Colors.SHADOW_BLACK_MEDIUM)
}
