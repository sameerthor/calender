/** @jsxRuntime classic */
/** @jsx createElement */
import { ScrollerBase } from '../../../preact/../core/components/scroller/scroller';
import { MbscScrollerOptions } from '../../../preact/../core/components/scroller/scroller.types';
import './scroller.scss';
export declare function template(s: MbscScrollerOptions, inst: ScrollerBase): any;
/**
 * The Scroller component.
 *
 * Usage:
 *
 * ```
 * <Scroller />
 * ```
 */
export declare class Scroller extends ScrollerBase {
    protected _template(s: MbscScrollerOptions): any;
}
