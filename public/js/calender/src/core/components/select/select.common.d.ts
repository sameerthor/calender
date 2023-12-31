import { SelectBase } from './select';
import { MbscSelectOptions } from './select.types.public';
import './select.scss';
export declare function template(s: MbscSelectOptions, inst: SelectBase, content: any, slots?: any): any;
export declare class Select extends SelectBase {
    _filterRenderer: () => any;
    _filterEmptyRenderer: () => any;
    protected _template(s: MbscSelectOptions): any;
}
