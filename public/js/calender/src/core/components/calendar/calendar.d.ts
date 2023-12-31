import { DateType } from '../../../core/util/datetime';
import { MbscCalendarNavService } from '../../shared/calendar-nav/calendar-nav';
import { MbscCalendarDayData } from '../../shared/calendar-view/calendar-day';
import { CalendarViewBase } from '../../shared/calendar-view/calendar-view';
import { ICalendarProps, ViewType } from '../../shared/calendar-view/calendar-view.types';
import { InstanceServiceBase } from '../../shared/instance-service';
import { PickerBase } from '../../shared/picker/picker';
import { IPickerProps, IPickerState } from '../../shared/picker/picker.types';
/**
 * Calendar options
 * @interface MbscCalendarOptions
 */
export interface MbscCalendarOptions extends IPickerProps, ICalendarProps {
    /** @hidden */
    active?: number;
    /** @hidden */
    selectMin?: number;
    /** @hidden */
    selectRange?: boolean;
    /** @hidden */
    selectView?: ViewType;
    /** @hidden */
    size?: number;
    /**
     * Specifies the type of the calendar.
     *
     * In case of `'month'` set the number of displayed months using the [pages](#opt-pages) option (swipeable month view) or
     * the [calendarSize](#opt-calendarSize) option (grid month view).
     *
     * In case of `'week'` set the number of displayed weeks using the [calendarSize](#opt-calendarSize) option.
     * @defaultValue 'month'
     */
    calendarType?: 'year' | 'month' | 'week';
    /**
     * Controls the direction of the calendar navigation. You can navigate by scrolling, swiping or by clicking the arrow
     * buttons in the header.
     * Possible values:
     * - `'horizontal'` - Enables navigating the view horizontally.
     * - `'vertical'` - Enables navigating the view vertically.
     * When navigation is `'vertical'`, the outer days (days from previous and next months) are hidden. You can explicitly override
     * it with the [showOuterDays](#opt-showOuterDays) option.
     * @defaultValue 'horizontal'
     */
    calendarScroll?: 'horizontal' | 'vertical';
    /**
     * Number of calendar pages (month or week) to display.
     * If `'auto'`, the displayed number of pages will be decided based on the viewport size.
     * @defaultValue 1
     */
    pages?: number | 'auto';
    /**
     * Specifies the reference date of the component, which represents when to start to calculate the view you want to display.
     *
     * For example, if you want to display 2 months from the current month, you must specify the first day of the current month as
     * the reference date. Then you can use the [calendarSize](#opt-calendarSize) option to show 2 months.
     *
     * @defaultValue '1970/01/01'
     */
    refDate?: DateType;
    /**
     * The maximum number of selected items in case of [multiple selection](#opt-selectMultiple).
     * @defaultValue undefined
     */
    selectMax?: number;
    /**
     * Show or hide days from previous and next months.
     *
     * :::info
     * Hiding outer days only works in case of month view, and not supported for week view.
     * :::
     *
     * :::info
     * Outer days are automatically hidden if [calendarScroll](#opt-calendarScroll) is set to `'vertical'`.
     * :::
     *
     * @defaultValue true
     */
    showOuterDays?: boolean;
    /**
     * Show week numbers on the calendar view. Enumeration starts with the first week of the year.
     * @defaultValue false
     */
    showWeekNumbers?: boolean;
    /**
     * @hidden
     * @deprecated
     * Number of weeks to display if [calendarType](#opt-calendarType) is set to `'week'`.
     *
     * Deprecated, use the [calendarSize](#opt-calendarSize) option instead.
     */
    weeks?: number;
    /**
     * Specifies the amount of selected items according to the rules of particular language. The '{count}' substring will be replaced with
     * the number of selected items.
     * @defaultValue '{count} selected'
     * @group Localizations
     */
    selectedText?: string;
    /**
     * Specifies the plural form of the amount of selected items according to the rules of particular language. The '{count}' substring will
     * be replaced with the number of selected items.
     * @defaultValue '{count} selected'
     * @group Localizations
     */
    selectedPluralText?: string;
    /**
     * @hidden
     * Use this option to customize the header of the Datepicker. In the template you can use custom components as well as the built in header
     * controls of the calendar.
     *
     * Check out the customizing the header section for a more detailed description on built in components.
     * @defaultValue undefined
     * @group Templates
     */
    calendarHeaderTemplate?: any;
    /**
     * @hidden
     * You can use the dayTemplate option to customize the day cells of the Datepicker. It takes a function that should return the desired
     * markup. The Datepicker will take care of the positioning, but everything else (like background color, hover effect, etc.) is left
     * to you.
     *
     * If you are looking to customize only the content and don't want to bother with the styling of the event, you can use the
     * [dayContentTemplate](#templates-dayContentTemplate) option.
     *
     * The template will receive an object as data. This data can be used to show day specific things on the Datepicker. The object passed
     * to the template has the following properties:
     * - date: Date object - The specific date as a Date object.
     * - selected: Boolean - True if the date is selected. (In case of calendar view)
     * - events: Array - The list of events of the day.
     *
     * @defaultValue undefined
     * @group Templates
     */
    dayTemplate?: any;
    /**
     * @hidden
     * You can use dayContentTemplate option to customize the day cells of the Datepicker. You will get the styling taken care of by the
     * Datepicker, and you can focus on what you show besides the day number a.k.a. the content.
     *
     * If you are looking to fully customize the day (ex. add custom hover effect) you will need to use the
     * [dayTemplate](#templates-dayTemplate) option. In that case you will only get the positioning done by the Datepicker and everything
     * else is up to you.
     *
     * The template will receive an object as data. This data can be used to show day specific things on the Datepicker. The object
     * passed to the template has the following properties:
     * - date: Date object - The specific date as a Date object.
     * - selected: Boolean - True if the date is selected.
     * - events: Array - The list of events of the day.
     *
     * @defaultValue undefined
     * @group Templates
     */
    dayContentTemplate?: any;
    /**
     * You can use the renderDay option to customize the day cells of the Datepicker. It takes a function that should return the desired
     * markup. The Datepicker will take care of the positioning, but everything else (like background color, hover effect, etc.) is left
     * to you.
     *
     * If you are looking to customize only the content and don't want to bother with the styling of the event, you can use the
     * [renderDayContent option](#renderer-renderDayContent).
     *
     * The render function will receive an object as parameter. This data can be used to show day specific things on the Datepicker.
     * @param args
     * The object passed to the function has the following properties:
     * - date: Date object - The specific date as a Date object.
     * - selected: Boolean - True if the date is selected. (In case of calendar view)
     * - events: Array - The list of events of the day.
     * @group Renderers
     */
    renderDay?(args: MbscCalendarDayData): any;
    /**
     * You can use the renderDayContent option to customize the day content of the Datepicker. It takes a function that should return the
     * desired markup. The Datepicker will take care of styling and you can focus on what you show beside the day number a.k.a the content.
     *
     * If you are looking to fully customize the day (ex. add custom hover effects) you will need to use the
     * [renderDay option](#renderer-renderDay). In that case you will only get the positioning done by the Datepicker and everything else
     * is up to you.
     *
     * The render function will receive an object as parameter. This data can be used to show day specific things on the Datepicker.
     * @param args
     * The object passed to the template has the following properties:
     * - date: Date object - The specific date as a Date object.
     * - selected: Boolean - True if the date is selected.
     * - events: Array - The list of events of the day.
     * @group Renderers
     */
    renderDayContent?(args: MbscCalendarDayData): any;
    /**
     * Use this option to customize the header of the Datepicker. It takes a function that should return the desired markup. In the
     * returned markup, you can use custom html as well as the built in header components of the calendar.
     *
     * Check out the customizing the header section for a more detailed description on built in components.
     * @group Renderers
     */
    renderCalendarHeader?(): any;
    /** @hidden */
    onActiveChange?(args: any, inst: any): void;
    /** @hidden */
    onCellHoverIn?(args: any, inst: any): void;
    /** @hidden */
    onCellHoverOut?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when a cell is clicked on the calendar.
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the clicked cell.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `target`: *HTMLElement* - The DOM element of the clicked cell.
     * @param inst The component instance.
     */
    onCellClick?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when a label is clicked on the calendar.
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the day on which the label was clicked.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `label`: *MbscCalendarLabel* - The original object of the label which was clicked, `undefined` in case of the "more" label.
     *    - `labels`: *Array<MbscCalendarLabel>* - An array containing each label object for the given day.
     *    - `target`: *HTMLElement* - The DOM element of the label.
     * @param inst The component instance.
     */
    onLabelClick?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the calendar page is changed (with buttons or swipe).
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageChange?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the calendar page is changed (with buttons or swipe) and the view finished rendering.
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageLoaded?(args: any, inst: any): void;
    /**
     * @event
     * Triggered before the markup of a calendar page is starting to render.
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageLoading?(args: any, inst: any): void;
}
/** @hidden */
export interface MbscCalendarState extends IPickerState {
    activeTab?: string;
    pages?: number;
}
/** @hidden */
export declare class CalendarBase extends PickerBase<MbscCalendarOptions, MbscCalendarState> {
    /** @hidden */
    static defaults: MbscCalendarOptions;
    static _name: string;
    /** @hidden */
    _calendarView: CalendarViewBase;
    /** @hidden */
    _instanceService?: InstanceServiceBase;
    /** @hidden */
    _navService: MbscCalendarNavService;
    /** @hidden */
    _update: number;
    /** @hidden */
    _onDayClick: (args: any) => void;
    /** @hidden */
    _onTodayClick: () => void;
    /** @hidden */
    _onActiveChange: (args: any) => void;
    /** @hidden */
    _valueEquals(v1: any, v2: any): boolean;
    _shouldValidate(s: MbscCalendarOptions, prevS: MbscCalendarOptions): boolean;
    _setCal: (cal: any) => void;
    protected _render(s: MbscCalendarOptions, state: MbscCalendarState): void;
    protected _copy(value: any): any;
    protected _format(value: any): string;
    protected _parse(value: any): {
        [key: number]: Date;
    };
    protected _get(value: {
        [key: string]: Date;
    }): any[] | Date;
}
