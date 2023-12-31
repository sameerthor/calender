import { MbscCalendarDayData } from '../../shared/calendar-view/calendar-day';
import { ICalendarProps, MbscCalendarEvent, MbscCalendarEventData, MbscCalendarLabel, MbscCalendarMarked, MbscResource } from '../../shared/calendar-view/calendar-view.types';
import { DateType } from '../../util/datetime';
import { EventcalendarBase } from './eventcalendar';
export interface IScheduleTimezone {
    cssClass?: string;
    label: string;
    timezone: string;
}
export interface MbscSelectedDateChangeEvent {
    /** The selected date. */
    date: DateType;
    /** The component instance. */
    inst: EventcalendarBase;
}
export interface MbscSelectedEventsChangeEvent {
    /** The selected events. */
    events: MbscCalendarEvent[];
    /** The component instance. */
    inst: EventcalendarBase;
}
export interface MbscCellClickEvent {
    /** The date of the clicked cell. */
    date: Date;
    /** The DOM event of the click. */
    domEvent: any;
    /** The events for the clicked date. */
    events: MbscCalendarEvent[];
    /** The id of the resource where the cell was clicked, if resources are set. */
    resource: number | string;
    /** Specifies if the day is currently selected or not (before it was clicked). */
    selected: boolean;
    /** The view where the cell was clicked. */
    source: 'calendar' | 'schedule' | 'timeline';
    /** The DOM element of the clicked cell. */
    target: HTMLElement;
}
export interface MbscCellHoverEvent {
    /** The selected date as a Date object. */
    date: Date;
    /** The DOM event of the hover. */
    domEvent: any;
    /** The events for the hovered day. */
    events: MbscCalendarEvent[];
    /** If the day has labels, contains the label objects for the hovered day. */
    labels: MbscCalendarLabel[];
    /** If the day is marked, contains the marked objects for the hovered day. */
    marked: MbscCalendarMarked[];
    /** Specifies if the day is currently selected or not. */
    selected: boolean;
    /** The table cell HTML DOM element. */
    target: HTMLElement;
}
export interface MbscEventClickEvent {
    /** The date of the day on which the event was clicked. */
    date: Date;
    /** The DOM event of the click. */
    domEvent: any;
    /** The clicked calendar event. */
    event: MbscCalendarEvent;
    /** The component instance.  */
    inst: EventcalendarBase;
    /** The id of the resource where the cell was clicked, if [resources](#opt-resources) are set. */
    resource: number | string;
    /** The view where the cell was clicked */
    source: 'agenda' | 'calendar' | 'popover' | 'schedule' | 'timeline';
}
export interface MbscEventDeleteEvent {
    /** The DOM event from the onKeyDown action. */
    domEvent: any;
    /** The deleted event's data object. */
    event: MbscCalendarEvent;
    /** The deleted events in case of multiple select. */
    events?: MbscCalendarEvent[];
    /** The component instance. */
    inst: EventcalendarBase;
    /** The view where the event is being created. */
    source: 'calendar' | 'schedule' | 'timeline';
    target?: HTMLElement;
}
export interface MbscEventDeletedEvent {
    /** The DOM event from the onKeyDown action. */
    domEvent: any;
    /** The deleted event's data object. */
    event: MbscCalendarEvent;
    /** The deleted events in case of multiple select. */
    events?: MbscCalendarEvent[];
    /** The component instance. */
    inst: EventcalendarBase;
    /** The view where the cell was clicked. */
    source: 'calendar' | 'schedule' | 'timeline';
}
export interface MbscEventCreateEvent {
    /** The action which created the event ('click', 'drag' or 'externalDrop'). */
    action: 'click' | 'drag' | 'externalDrop';
    /** The DOM event from the end of the gesture (mouseup or touchend). */
    domEvent: any;
    /** The newly created event object. */
    event: MbscCalendarEvent;
    /**
     * The occurrence of the event which was dragged. Will be set only if the event was
     * created by dragging a recurring event occurrence.
     */
    originEvent: MbscCalendarEvent;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The view where the event is being created. */
    source: 'calendar' | 'schedule' | 'timeline';
}
export interface MbscEventCreatedEvent {
    /** The action which created the event ('click', 'drag' or 'externalDrop'). */
    action: 'click' | 'drag' | 'externalDrop';
    /** The newly created event object. */
    event: MbscCalendarEvent;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The view where the event is being created.. */
    source: 'calendar' | 'schedule' | 'timeline';
    /** The DOM element of the created event. */
    target?: HTMLElement;
}
export interface MbscEventUpdateEvent {
    /** The DOM event from the end of the gesture (mouseup or touchend). */
    domEvent: any;
    /** The updated event object. */
    event: MbscCalendarEvent;
    /**
     * The updated events. This property is present on recurring event delete,
     * when [selectMultipleEvents](#selectMultipleEvents) is set to true.
     */
    events?: MbscCalendarEvent[];
    /** The newly created event object. Will be set only if the dragged event was a recurring event occurrence. */
    newEvent: MbscCalendarEvent;
    /** The original event object before the update. */
    oldEvent: MbscCalendarEvent;
    /**
     * The original events before the update. This property is present on recurring event delete,
     * when [selectMultipleEvents](#selectMultipleEvents) is set to true.
     */
    oldEvents?: MbscCalendarEvent[];
    /**
     * The occurrence of the event which was dragged.
     * Will be set only if the dragged event was a recurring event occurrence.
     */
    oldEventOccurrence?: MbscCalendarEvent;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The view where the event is being updated */
    source: 'calendar' | 'schedule' | 'timeline';
}
export interface MbscEventUpdatedEvent {
    /** The updated event object. */
    event: MbscCalendarEvent;
    /**
     * The updated events. This property is present on recurring event delete,
     * when [selectMultipleEvents](#selectMultipleEvents) is set to true.
     */
    events?: MbscCalendarEvent[];
    /** The original event object before the update. */
    oldEvent: MbscCalendarEvent;
    /**
     * The original events before the update. This property is present on recurring event delete,
     * when [selectMultipleEvents](#selectMultipleEvents) is set to true.
     */
    oldEvents?: MbscCalendarEvent[];
    /** The component instance. */
    inst: EventcalendarBase;
    /** The view where the event is being updated */
    source: 'calendar' | 'schedule' | 'timeline';
    /** The DOM element of the created event. */
    target?: HTMLElement;
}
export interface MbscLabelClickEvent {
    /** The date of the day on which the label was clicked. */
    date: Date;
    /** The DOM event of the click. */
    domEvent: any;
    /** The original object of the label which was clicked, undefined in case of the "more" label. */
    label: MbscCalendarLabel;
    /** An array containing each label object for the given day. */
    labels: MbscCalendarLabel[];
    event: MbscCalendarEvent;
    /** The component instance. */
    inst: EventcalendarBase;
}
export interface MbscNewEventData {
    resource?: string | number;
    slot?: string | number;
    start: Date;
}
export interface MbscPageChangeEvent {
    /** The first day of the displayed page. */
    firstDay: Date;
    /** The last day of the displayed page. */
    lastDay: Date;
    /** The first day of the visible month in case of month view. */
    month?: Date;
    /** The component instance. */
    inst: EventcalendarBase;
}
export interface MbscPageLoadingEvent {
    /** The first day of the displayed page. */
    firstDay: Date;
    /** The last day of the displayed page. */
    lastDay: Date;
    /** The first day of the visible month in case of month view. */
    month?: Date;
    /** The component instance. */
    inst: EventcalendarBase;
}
export interface MbscPageLoadedEvent {
    /** The first day of the displayed page. */
    firstDay: Date;
    /** The last day of the displayed page. */
    lastDay: Date;
    /** The first day of the visible month in case of month view. */
    month?: Date;
    /** The component instance. */
    inst: EventcalendarBase;
}
export interface MbscEventUpdateFailedEvent {
    /** The updated event object. */
    event: MbscCalendarEvent;
    /** The newly created event object. Will be set only if the dragged event was a recurring event occurrence. */
    newEvent: MbscCalendarEvent;
    /** The original event object before the update. */
    oldEvent: MbscCalendarEvent;
    /** The occurrence of the event which was dragged. Will be set only if the dragged event was a recurring event occurrence. */
    oldEventOccurrence: MbscCalendarEvent;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The invalid object which the event interacted with. */
    invalid: MbscCalendarEvent;
    /** The view where the event was updated */
    source: 'calendar' | 'schedule' | 'timeline';
}
export interface MbscEventCreateFailedEvent {
    /** The action which created the event  */
    action: 'click' | 'drag' | 'externalDrop';
    /** The newly created event object */
    event: MbscCalendarEvent;
    /**
     * The occurrence of the event which was dragged.
     * Will be set only if the event was created by dragging a recurring event occurrence.
     */
    originEvent: MbscCalendarEvent;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The invalid object which the event interacted with. */
    invalid: MbscCalendarEvent;
    /** The view where the event was created */
    source: 'calendar' | 'schedule' | 'timeline';
}
export interface MbscEventDragEvent {
    /** The user action which triggered the event. (In case of drag start) */
    action?: 'create' | 'resize' | 'move';
    /** The DOM event of the dragged event. */
    domEvent: any;
    /** The dragged calendar event. */
    event: MbscCalendarEvent;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The id of the resource where the event is dragged, if [resources](#opt-resources) are set. */
    resource?: number | string;
    /** The id of the slot where the event is dragged, if [slots](#slots) are set. */
    slot?: number | string;
    /** The view where the event is dragged. */
    source: 'calendar' | 'schedule' | 'timeline';
}
export interface MbscResourceCollapseEvent {
    /** The DOM event of the click. */
    domEvent: any;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The id of the collapsed [resource](#opt-resources). */
    resource?: number | string;
}
export interface MbscResourceExpandEvent {
    /** The DOM event of the click. */
    domEvent: any;
    /** The component instance. */
    inst: EventcalendarBase;
    /** The id of the collapsed [resource](#opt-resources). */
    resource?: number | string;
}
export interface MbscEventcalendarView {
    agenda?: {
        /** Specifies the list type */
        type?: 'day' | 'week' | 'month' | 'year';
        /** Makes the event listing independently scrollable. */
        scrollable?: boolean;
        /** Specifies the number of years, months, weeks or days included in the list (depending on the specified type). */
        size?: number;
    };
    calendar?: {
        /** Displays the number of events on days with events. */
        count?: boolean;
        /** Enable displaying events as labels on calendar days */
        labels?: boolean | 'all' | number;
        /** Show or hide days from previous and next months. Hiding only works for type: 'month'. */
        outerDays?: boolean;
        /** Enable popover for event listing on days containing events. */
        popover?: boolean;
        /**
         * A CSS class that's added to the popover element.
         * Can be used to customize the styling of the popover on a calendar basis.
         */
        popoverClass?: string;
        /** Specifies the direction of the calendar scroll. Can be 'horizontal' or 'vertical' */
        scroll?: 'horizontal' | 'vertical';
        /** Specifies the number of displayed weeks/months. */
        size?: number;
        /** Specifies the calendar type */
        type?: 'year' | 'month' | 'week';
        /** Show or hide week numbers. */
        weekNumbers?: boolean;
    };
    schedule?: {
        /** Show or hide the current time indicator. (default true when the resolution is less than a day) */
        currentTimeIndicator?: boolean;
        /** Specifies the last day of the view: Sunday is 0, Monday is 1, etc. */
        endDay?: number;
        /** Specifies the end time of schedule column. Hours and minutes can be specified in the same string, example: '18:30'. */
        endTime?: string;
        /** Specifies the number of displayed days/weeks. */
        size?: number;
        /** Specifies the first day of the view: Friday is 5, Saturday is 6, etc. */
        startDay?: number;
        /** Specifies the start time of schedule column. Hours and minutes can be specified in the string, example: '09:30'. */
        startTime?: string;
        /** Specifies the schedule type. */
        type?: 'day' | 'week' | 'month';
        /** Show or hide week days above the schedule grid. */
        days?: boolean;
        /** Show or hide the all day events. */
        allDay?: boolean;
        /**
         * Specifies the step of the grid cells in minutes.
         * Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440
         */
        timeCellStep?: number;
        /**
         * Specifies the step of the time labels in minutes.
         * Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440.
         */
        timeLabelStep?: number;
        /** Use this to display times in multiple timezones on the time scale and time indicator */
        timezones?: Array<IScheduleTimezone | string>;
    };
    timeline?: {
        /** Show or hide the current time indicator. (default true when the resolution is less than a day) */
        currentTimeIndicator?: boolean;
        /** Specifies the last day of the view: Sunday is 0, Monday is 1, etc. */
        endDay?: number;
        /**
         * Specifies the end time of schedule column.
         * Hours and minutes can be specified in the same string, example: '18:30'.
         */
        endTime?: string;
        /**
         * If true, transforms the hour-by-hour layout into a daily summary view.
         * The events are listed under the appropriate day one after the other.
         */
        eventList?: boolean;
        /**
         * Controls the height of the timeline view rows.
         * By default timeline rows will have 'variable' height and will expand to accommodate the displayed events.
         * If it is set to 'equal', the rows will have equal heights.
         */
        rowHeight?: 'variable' | 'equal';
        /** Specifies the number of displayed days/weeks/months. */
        size?: number;
        /** Specifies the first day of the view: Friday is 5, Saturday is 6, etc. */
        startDay?: number;
        /**
         * Specifies the start time of schedule column.
         * Hours and minutes can be specified in the string, example: '09:30'.
         */
        startTime?: string;
        /** Specifies the timeline type. */
        type?: 'day' | 'week' | 'month' | 'year';
        /**
         * Specifies the step of the grid cells in minutes.
         * Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440
         */
        timeCellStep?: number;
        /**
         * Specifies the step of the time labels in minutes.
         * Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440.
         */
        timeLabelStep?: number;
        days?: boolean;
        allDay?: boolean;
        /**
         * Specifies the resolution of the timeline column.
         * Possible values: 'hour', 'day', 'week', 'month', 'year'.
         */
        resolution?: 'year' | 'month' | 'week' | 'day' | 'hour';
        resolutionHorizontal?: 'year' | 'month' | 'week' | 'day' | 'hour';
        resolutionVertical?: 'day';
        /** Show or hide week numbers. */
        weekNumbers?: boolean;
    };
}
export interface MbscEventConnection {
    /** Specifies where to display arrows */
    arrow?: 'from' | 'to' | 'bidirectional' | boolean;
    /** Specifies the color of the connection. */
    color?: string;
    /** Add a specific css class to the connection for further customization */
    cssClass?: string;
    /** The id of the event where the connection will begin */
    from: string | number;
    /** The id of the event where the connection will end. */
    to: string | number;
}
/**
 * Options for the event calendar.
 */
export interface MbscEventcalendarOptions extends ICalendarProps {
    /** @hidden */
    chevronIconDown?: string;
    /** @hidden */
    colorEventList?: boolean;
    /** @hidden */
    eventTemplate?: any;
    /** @hidden */
    moment?: any;
    /** @hidden */
    monthSuffix?: string;
    /** @hidden */
    daySuffix?: string;
    /** @hidden */
    yearSuffix?: string;
    /** @hidden */
    valid?: any;
    /** @hidden */
    returnFormat?: 'jsdate' | 'iso8601' | 'locale' | 'moment';
    /**
     * Specifies if the events on the agenda and inside the calendar popover are actionable or not.
     * If actionable, the event items will have hover and active states, and pointer cursor.
     * Set to `false` when custom event rendering is used and the event list items contain other actionable elements, e.g. buttons.
     *
     * @defaultValue true
     * @group Options_calendarview
     * @group Options_agenda
     * @group Properties
     */
    actionableEvents?: boolean;
    /**
     * Enable new event creation on click. If `true` or `'double'`, a new event will be created only with a double click
     * and with the `'single'` value the event will be created instantly with a single click.
     *
     * This option will only work on desktop environment where mouse events are fired.
     * It will also allow deleting of the focused events using the Delete or Backspace key.
     *
     * In touch environment a long tap should be used to create a new event
     * and it is controlled by the [dragToCreate](#opt-dragToCreate) option.
     *
     * Using the [extendDefaultEvent](#opt-extendDefaultEvent) option extra properties can be set for the created event.
     *
     * The event deletion functionality can be overwritten using the [eventDelete](#opt-eventDelete) option.
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    clickToCreate?: boolean | 'double' | 'single';
    /**
     * Specifies connections between events. On the UI events will be linked with lines
     * and additionally arrows can be displayed to illustrate the direction of the connection.
     * Events can have multiple connections simultaneously.
     *
     * An array of connection objects can be passed.
     * The connection object has the following properties:
     * - `arrow`: *boolean | 'from' | 'to' | 'bidirectional'* - Specify where to display arrows.
     * If `true`, the arrow will display only at the end side of the connection.
     * - `color`: *string* - The color of the connection.
     * - `cssClass`: *string* - Custom CSS class for the connection line for further customization.
     * - `from`: *string* - The id of the event where the connection will begin.
     * - `to`: *string* - The id of the event where the connection will end.
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Properties
     */
    connections?: MbscEventConnection[];
    /**
     * The events for the calendar, as an array of event objects. The event object supports the following properties:
     * - `allDay`: *boolean* - Specifies if the event is all day or not.
     * - `color`: *string* - The color of the event.
     * - `cssClass` *string* - Custom CSS class for the event.
     * Useful when customization is needed on the event level.
     * For example: setting the width for specific events.
     * - `editable`: *boolean* - Specifies if an event is editable or not. Setting it to `false` disables drag & drop, resize and delete,
     * - `end`: *Date | string | object* - The end of the event.
     * - `id`: *string | number*, Number - A unique id for the event. If not specified, the event will get a generated id.
     * and the event will have the `mbsc-readonly-event` CSS class. With this class, the fixed events will be easily customizable,
     * for example: add opacity or disable the cursor on the fixed events.
     * - `recurring`: *string | object* - Recurrence rule for the event.
     * - `recurringException`: *string | object | Array<string | object>* - Exception dates of the recurring rule.
     * Useful when specific dates need to be skipped from the rule.
     * - `recurringExceptionRule`: *string | object* - Exception rule of the recurring rule.
     * Useful when recurring dates need to be skipped from the rule.
     * - `resource`: *string | number | Array<string | number>* - Specifies the [resource](#opt-resources) ids for the event.
     * The event will be displayed only in the specified resources.
     * If there is no resource defined, the event will be displayed in every resource.
     * - `slot`: *string | number* - Specifies the [slot](#opt-slots) id for the event.
     * - `start`: *Date | string | object* - The start of the event.
     * The event will be displayed only in the specified slot.
     * If there is no slot defined, the event will be displayed in every slot.
     * - `title`: *string* - The title of the event.
     * - `tooltip`: *string* - The tooltip text of the event.
     *
     * :::info
     * The dates can be specified as JavaScript Date objects, ISO 8601 strings, or moment objects.
     * :::
     * :::info
     * The event objects may have additional custom properties as well.
     * The custom properties are not used by the event calendar, but they are kept and will be available anywhere the event objects are used.
     * E.g. the [onEventClick](#event-onEventClick) event will receive the event object as argument, containing the custom properties as well.
     * :::
     * :::info
     * Use the [getEvents](#method-getEvents) method to get the events between two dates.
     * :::
     *
     * ```js
     * data: [
     *   {
     *     start: new Date(2021, 5, 23),
     *     end: new Date(2021, 5, 30),
     *     title: 'Conference',
     *     allDay: true,
     *     color: 'red'
     *   },
     *   {
     *     title: 'Work project',
     *     recurring: {
     *       repeat: 'daily',
     *       until: '2021-04-01'
     *     },
     *     recurringException: ['2021-03-15', '2021-03-25'],
     *     recurringExceptionRule: {
     *       repeat: 'weekly',
     *       weekDays: 'SA,SU'
     *     }
     *   }
     * ]
     * ```
     *
     * @defaultValue undefined
     */
    data?: MbscCalendarEvent[];
    /**
     * Specifies the initial selected date on the calendar.
     * @defaultValue undefined
     */
    defaultSelectedDate?: DateType;
    /**
     * Specifies the steps in minutes for the scheduler and timeline events during drag.
     * @defaultValue 15
     * @group Options_timeline
     * @group Options_scheduler
     * @group Properties
     */
    dragTimeStep?: number;
    /**
     * If `true`, dragging on an empty cell will create a new event.
     * It will also allow deleting of the focused events using the Delete or Backspace key.
     *
     * The title of the new event can be specified with the [newEventText](#opt-newEventText) option.
     *
     * Using the [extendDefaultEvent](#opt-extendDefaultEvent) option extra properties can be set for the created event.
     *
     * The event deletion functionality can be overwritten using the [eventDelete](#opt-eventDelete) option.
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    dragToCreate?: boolean;
    /**
     * If `true`, the events will be moveable.
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    dragToMove?: boolean;
    /**
     * If `true`, the events will be resizable.
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    dragToResize?: boolean;
    /**
     * Enables or disables event deletion. When `true`, the focused event will be deleted on pressing the Delete or Backspace
     * keys on the keyboard.
     *
     * By default the event deletion depends on the [clickToCreate](#opt-clickToCreate) and [dragToCreate](#opt-dragToCreate) options.
     * If either of those are `true`, and no `eventDelete` option is set, then event deletion is also enabled, otherwise not.
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    eventDelete?: boolean;
    /**
     * Determines the ordering of the events within the same day.
     * Can be a function that accepts two event objects as arguments and should return -1 or 1.
     *
     * If not specified, the default order is:
     * - all day events
     * - rest of events, sorted by start time; events with identical start times,
     * will be ordered alphabetically based on their title
     *
     * @defaultValue undefined
     * @group Options_agenda
     * @group Properties
     */
    eventOrder?: (event1: MbscCalendarEvent, event2: MbscCalendarEvent) => number;
    /**
     * If `true`, the event calendar will work in exclusive end dates mode,
     * meaning that the last moment of the range (event, invalid, colors, etc.) is not part of the range.
     *
     * E.g. `end: '2021-07-03T00:00'` means that the event ends on 2nd of July and will not be displayed on 3rd of July.
     *
     * :::info
     * When using timezones, the `exclusiveEndDates` option will default to `true`.
     * :::
     */
    exclusiveEndDates?: boolean;
    /**
     * Use this option to set properties to the new event created with click or drag.
     * The event creation is handled by the [clickToCreate](#opt-clickToCreate) and [dragToCreate](#opt-dragToCreate) options.
     * It takes a function that should return the properties for the new event.
     * The argument object passed to this function has the following properties:
     * - `start`: *Date* - The date when the newly created event will start.
     * - `resource`: *string | number* - The id of the resource where the event creation started.
     *
     * ```js
     * extendDefaultEvent: (args) => {
     *   return {
     *     color: args.resource === 'admin' ? 'green' : 'red',
     *     title: 'My event',
     *   };
     * }
     * ```
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    extendDefaultEvent?: (args: MbscNewEventData) => MbscCalendarEvent;
    /**
     * If `true`, external drag & drop is allowed.
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    externalDrop?: boolean;
    /**
     * Groups the [events](#opt-data) by date or by [resource](#opt-resource).
     *
     * @defaultValue 'resource'
     * @group Options_scheduler
     * @group Properties
     */
    groupBy?: 'date' | 'resource';
    /**
     * Specifies how to validate events against [invalid](#opt-invalid) ranges on create/move/resize:
     * - `'strict'` - The event cannot intersect with an invalid range at all.
     * - `'start-end' - The event start and end cannot be inside an invalid range.
     * @defaultValue 'strict'
     * @group Options_timeline
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Properties
     */
    invalidateEvent?: 'start-end' | 'strict';
    /**
     * Maximum date and time. The calendar cannot be navigated beyond the specified maximum date.
     * If navigation is needed, but event creation should not be allowed after a specific date,
     * use the [invalid](#opt-invalid) option with daily recurrence starting from the specific date.
     * @defaultValue undefined
     */
    max?: DateType;
    /**
     * Minimum date and time. The calendar cannot be navigated beyond the specified minimum date.
     * If navigation is needed, but event creation should not be allowed before a specific date,
     * use the [invalid](#opt-invalid) option with daily recurrence until the specific date.
     * @defaultValue undefined
     */
    min?: DateType;
    /**
     * Specifies the reference date of the component, which represents when to start to calculate the view you want to display.
     * For example, if you want to display 14 days from today, you can specify today as the reference date.
     *
     * :::info
     * If not defined, in case of scheduler and timeline views it will default to today, in other views it will default to `'1970/01/01'`.
     * :::
     *
     * @defaultValue undefined
     */
    refDate?: DateType;
    /**
     * The scheduler and timeline views can handle multiple resources.
     * Resource grouping can be modified with the help of the [groupBy](#opt-groupBy) option.
     *
     * If set to `null` or `undefined`, all events will be displayed, regardless of their `resource` property.
     * If set to an empty array, only those events will be displayed which are not tied to any resource.
     *
     * The timeline view can render multiple levels of hierarchy groups. Levels can be added with the help of the `children` property.
     *
     * The resource object supports the following properties:
     * - `children`: *Array<MbscResource>* - Children resources.
     * - `collapsed`: *boolean* - The displayed state of the children resources.
     * - `id`: Number, *string* - The id of the resource.
     * - `name`: *string* - The name of the resource.
     * - `color`: *string* - The color sets the default color for the events of the resource.
     * If an event has an explicit color set, the resource color will be overridden.
     * If the color is not set, the events of the resource will inherit the default calendar color.
     * - `eventCreation`: *boolean* - Disable event creation on specific resources by setting it to `false`. It's `true` by default.
     *
     * ```js
     * resources: [
     *   {
     *     id: 1,
     *     name: 'Flatiron Room',
     *     color: '#f7c4b4'
     *   },
     *   {
     *     id: 2,
     *     name: 'The Capital City',
     *     color: '#c6f1c9'
     *   },
     *   {
     *     id: 3,
     *     name: 'Heroes Square',
     *     color: '#e8d0ef'
     *   }
     * ]
     * ```
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Options_scheduler
     * @group Properties
     */
    resources?: MbscResource[] | null | undefined;
    /**
     * Specifies the selected date on the calendar. Setting this option will force the calendar to display the passed date
     * and won't display anything else unless another selected date is set. This is called a controlled usage, and the
     * [onSelectedDateChange](#event-onSelectedDateChange) event can be used to get notified and act on navigational changes.
     *
     * To set the initially displayed date without a controlled usage, use the [defaultSelectedDate option](#opt-defaultSelectedDate) instead.
     *
     * @defaultValue undefined
     */
    selectedDate?: DateType;
    /**
     * Specifies the selected events on the calendar. The [onSelectedEventsChange](#event-onSelectedEventsChange) event will be
     * fired when the selected events change from the calendar.
     * @defaultValue undefined
     */
    selectedEvents?: MbscCalendarEvent[];
    /**
     * When `true`, enables multiple event selection on the calendar.
     * @defaultValue false
     */
    selectMultipleEvents?: boolean;
    /**
     * If `false`, it will hide the native tooltip that shows up when hovering over an event.
     * @defaultValue true
     */
    showEventTooltip?: boolean;
    /**
     * The slots besides the [resources](#opt-resources) introduce a horizontal level of data grouping to the timeline view.
     *
     * If set to `null` or `undefined`, all events will be displayed, regardless of their slot property.
     * If set to an empty array, only those events will be displayed which are not tied to any slot.
     *
     * The slot object supports the following properties:
     *
     * - `id`: *string | number* - The id of the slot.
     * - `name`: *string* - The name of the slot.
     *
     * ```js
     * slots: [
     *   {
     *     id: 1,
     *     name: 'Morning shift',
     *   },
     *   {
     *     id: 2,
     *     name: 'Afternoon shift',
     *   }
     * ]
     * ```
     *
     * @defaultValue undefined
     * @group Options_timeline
     * @group Properties
     */
    slots?: MbscSlot[] | null | undefined;
    /**
     * Configures the event calendar view. Possible views:
     *
     * `calendar`: Configures the calendar view. Properties:
     * - `type`: *'week' | 'month' | 'year'* (default `'month'`) - Sets the calendar type.
     * - `size`: *number* (default `1`) - Specifies the number of displayed weeks or months.
     * - `count`: *boolean* (default `false`) - If `true`, it will display the number of events on the days with events.
     * - `outerDays`: *boolean* (default `false`) - Show or hide days from previous and next months. Does not apply to week view.
     * - `labels`: *boolean | number | 'all'* (default `true`) - Enable displaying events as labels on calendar days.
     *   - If set to `true`, events will be displayed in the available space.
     *   If there are more events for a day, than the available space,
     *   a label with "more" text will be displayed, which opens a popover showing all the events for the given day.
     *   To fit more events on a day, set the calendar height to an appropriate value, using the [height](#height) option.
     *   - If set to `'all'`, all the events will be displayed in the calendar cell and
     *   the row height will auto-expand based on the displayed events.
     *   The view will became scrollable if the rows overflow the available height.
     *   - Specify a number to set how many events will be displayed before the "more" button in a calendar cell.
     *   The row height will auto expand until the labels count reaches the given number and after that the "x more" button will be displayed.
     *   In the case when only one event should go in the "more" popup, that event will be displayed in the place of the "x more" button.
     * - `popover`: *boolean* (default `undefined`) - Enable popover on days containing events. If not explicitly defined,
     *   the popover will not show up if an agenda view is also displayed. If event labels are displayed,
     *   the popover will only show up for days where the labels do not fit on the calendar, and a "more" label is present.
     * - `popoverClass`: *string* (default `undefined`) - A custom CSS class added to the popover element.
     *   Can be used to customize the styling of the popover.
     * - `scroll`: *'horizontal' | 'vertical'* (default `'horizontal'`) - Specifies the direction of the calendar scroll.
     * - `weekNumbers`: *boolean* (default `false`) - Show or hide week numbers.
     *
     * `agenda`: Configures the agenda view. Properties:
     * - `type`: *'day' | 'week' | 'month' | 'year'* (default `'month'`) - Sets the agenda type.
     *   If calendar is also displayed, only `'month'`, `'week'` and `'day'` values are supported.
     *   In case of month and week, the type and size should match the calendar type and size.
     *   In case of day type events on the selected calendar day will be displayed, so size will always be `1`.
     * - `size`: *number* (default `1`) - Specifies the number of displayed years, months, weeks or days.
     * - `scrollable`: *boolean* (default `true`) - Setting this to `true` makes the agenda independently scrollable.
     *   :::info
     *   There are two prerequisites for making this work:
     *
     *   1 - The calendar needs to be to placed inside a container which has a height. This can be either a fixed height,
     *   a height in percentage, or a flex height. When the calendar is placed directly in a container with a fixed height,
     *   it will work out of the box. If the height of the container is specified in percentage,
     *   e.g. you'd like to fill the full page height, you need to make sure that all parent elements also have `'height: 100%'` specified,
     *   up until the `body` and `html` elements, or until the closest parent which has a fixed height.
     *   If the container is inside a parent with flex layout, it will also work out of the box.
     *
     *   2 - The agenda needs a minimum height of 200px - the result of the container height
     *   minus the height of the calendar header minus the height of the displayed calendar rows.
     *   If the calculated height is less then 200px, the agenda will not be scrollable.
     *   :::
     *
     * `schedule`: Configures the scheduler view. Properties:
     * - `type`: *'day' | 'week' | 'month'* (default `'week'`) - Sets the scheduler type.
     * - `size`: *number* (default: `1`)- Specifies the number of displayed months, weeks or days.
     * - `allDay`: *boolean* (default `true`) - Show or hide the all day events.
     * - `currentTimeIndicator`: *boolean* (default `true`) - Show or hide the current time indicator.
     * - `days`: *boolean* (default `true`) - Show or hide week days above the scheduler grid.
     * - `startDay`: *number* (default `0`) - Set the first week day of the view: Friday is 5, Saturday is 6, etc.
     * - `endDay`: *number* (default `6`) - Set the last week day of the view: Sunday is 0, Monday is 1, etc.
     * - `startTime`: *string* (default `'00:00'`) - Set the start time of scheduler column.
     *   Hours and minutes can be specified in the same string, example: `'09:30'`.
     * - `endTime`: *string* (default `'24:00'`) - Set the end time of scheduler column.
     *   Hours and minutes can be specified in the same string, example: `'18:30'`.
     * - `timeCellStep`: *number* (default `60`) - Set the step of the grid cells in minutes.
     *   Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440.
     * - `timeLabelStep`: *number* (default `60`) - Set the step of the time labels in minutes.
     *   Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440.
     * - `timezones`: *Array<string | object>* - Display times in multiple timezones on the time scale and time indicator.
     *   The timezones array can contain timezone strings or objects with timezone and label properties.
     *   Timezone strings must use the name from the [IANA time zone database](https://gist.github.com/aviflax/a4093965be1cd008f172).
     *   If no label is provided, the time column label will be UTC +/- the timezone offset.
     *    ```js
     *    timezones: ['Europe/Berlin','Europe/Bucharest']
     *    ```
     *
     *    ```js
     *    timezones: [
     *      { timezone: 'America/Chicago', label: 'CHI'},
     *      { timezone: 'America/New_York', label: 'NY'}
     *    ]
     *    ```
     *
     * `timeline`: Configures the timeline view. Properties:
     * - `type`: *'day' | 'week' | 'month' | 'year'* (default `'week'`) - Sets the timeline type.
     * - `size`: *number* (default: `1`)- Specifies the number of displayed years, months, weeks or days.
     * - `resolutionHorizontal`: *'hour', 'day', 'week', 'month', 'year'* (default 'hour') - Sets the horizontal resolution of the timeline.
     *   In case of hourly resolution, the columns can be split to minutes (1, 5, 15, 20, 30) or merge to multiple
     *   hours (2, 3, 4, 6, 8, 12) using the `timeCellStep` and `timeLabelStep` properties.
     * - `currentTimeIndicator`: *boolean* - Show or hide the current time indicator.
     *   Defaults to `true`, when the horizontal resolution is less than a day.
     * - `startDay`: *number* (default `0`) - Set the first week day of the view: Friday is 5, Saturday is 6, etc.
     * - `endDay`: *number* (default `6`) - Set the last week day of the view: Sunday is 0, Monday is 1, etc.
     * - `startTime`: *string* (default `'00:00'`) - Set the start time of the timeline days.
     *   Hours and minutes can be specified in the same string, example: `'09:30'`.
     * - `endTime`: *string* (default `'24:00'`) - Set the end time of the timeline days.
     *   Hours and minutes can be specified in the same string, example: `'18:30'`.
     * - `timeCellStep`: *number* (default `60`) - Set the step of the grid cells in minutes.
     *   Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440.
     * - `timeLabelStep`: *number* (default `60`) - Set the step of the time labels in minutes.
     *   Supported values: 1, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 480, 720, 1440.
     * - `eventList`: *boolean* (default `false`) - If `true`, transforms the layout into a summary view.
     *   The events are listed in the appropriate cell one after the other.
     * - `rowHeight`: *'variable' | 'equal'* (default 'variable') - Controls the height of the timeline rows.
     *   By default rows will have variable height and will expand to accommodate the displayed events.
     *   If it is set to `'equal'`, the rows will have equal heights.
     * - `weekNumbers`: *boolean* (default `false`) - Show or hide week numbers.
     *
     * ```js
     * view: {
     *   calendar: {
     *     type: 'week',
     *     size: 2
     *   },
     *   agenda: {
     *     type: 'week',
     *     size: 2
     *   }
     * }
     * ```
     *
     * @group _none
     * @group Properties
     */
    view?: MbscEventcalendarView;
    /**
     * Text for all day events.
     * @defaultValue 'All-day'
     * @group Localizations
     */
    allDayText?: string;
    /**
     * Title for the newly created event with the [dragToCreate](#opt-dragToCreate) and the
     * [clickToCreate](#opt-clickToCreate) action.
     * @defaultValue 'New event'
     * @group Localizations
     * @group Localizations_calendarview
     * @group Localizations_scheduler
     * @group Localizations_timeline
     */
    newEventText?: string;
    /**
     * Text for empty event list.
     * @defaultValue 'No events'
     * @group Localizations
     * @group Localizations_agenda
     */
    noEventsText?: string;
    /**
     * A render function to customize the agenda template. Should return the markup of an event list, to be used in the agenda listing.
     * It receives the following parameters:
     *
     *  - events: Array - The events of the current view, grouped by day. A day object has the following properties:
     *     - date: String - The formatted date of the day.
     *     - events: Array - The list of events for the day. An event object has the following properties:
     *        - allDay: String - The localized all-day text in case of all day events.
     *        - end: String - The formatted end time, if the event is not all day.
     *        - id: String - The id of the event.
     *        - isMultiDay: Boolean - True if the event spans across multiple days.
     *        - lastDay: Boolean - True if it's rendered on the last day of a multiple event.
     *        - original: Object - The original event object.
     *        - start: String - The formatted start time, if the event is not all day.
     *        - title: String - The title of the event.
     *     - timestamp: Number - The timestamp of the day
     *  - options: Object - The current settings of the component.
     *  - dayRefs: Object - An object holding the references to the DOM elements of the days containing the event listings.
     * Needed for the scroll functionality: clicking on a calendar date scrolls to the date on the list as well,
     * and scrolling the list updates the selected date on the calendar.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_agenda
     */
    renderAgenda?(events: MbscEventList[], options: MbscEventcalendarOptions, dayRefs: {
        [key: number]: HTMLElement | null;
    }): any;
    /**
     * A render function to customize the day cells of the calendar view and the header date container in case of schedule and timeline view.
     * It takes a function that should return the desired markup. The event calendar will take care of the positioning,
     * but everything else (like background color, hover effect, etc.) is left to you.
     *
     * If you are looking to customize only the content and don't want to bother with the styling of the event,
     * in case of calendar and schedule view you can use the [renderDayContent](#renderer-renderDayContent) option.
     *
     * The render function will receive an object as parameter. This data can be used to show day specific things on the event calendar.
     * The object passed to the function has the following properties:
     *  - date: Date object - The specific date as a Date object.
     *  - selected: Boolean - True if the date is selected. (In case of calendar view)
     * - events: Array - The list of events of the day.
     * - resource: String, Number - The id of the resource in case of scheduler(week and month views)
     * when the events are grouped by resources.
     * - isActive: Boolean - On the timeline view, this parameter will be true when rendering the current day/week/month/year.
     *
     * Example:
     * ```
     * const myCustomDay = (day: any) => {
     *    const date = day.date;
     *
     *    return <>
     *      <div>{formatDate('DDDD', date)}</div>
     *      <p>{formatDate('MMMM DD', date)}</p>
     *    </>;
     * }
     * ```
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_calendarview
     * @group Renderers_scheduler
     * @group Renderers_timeline
     */
    renderDay?(args: MbscCalendarDayData): any;
    /**
     * A render function to customize the day content of the event calendar. It takes a function that should return the desired markup.
     * The event calendar will take care of styling and you can focus on what you show beside the day number a.k.a the content.
     *
     * If you are looking to fully customize the day (ex. add custom hover effects) you will need to use the
     * [renderDay](#renderer-renderDay) option. In that case you will only get the positioning done by the event calendar and everything
     * else is up to you.
     *
     * The render function will receive an object as parameter. This data can be used to show day specific things on the event calendar.
     * The object passed to the function has the following properties:
     *  - date: Date object - The specific date as a Date object.
     *  - selected: Boolean - True if the date is selected. (In case of calendar view)
     *  - events: Array - The list of events of the day.
     *  - resource: String, Number - The id of the resource in case of scheduler(week and month views)
     * when the events are grouped by resources.
     *
     * Example:
     * ```
     * const myCustomDay = (day: any) => {
     *    const date = day.date;
     *
     *    return <>
     *      <div>{formatDate('DDDD', date)}</div>
     *      <p>{formatDate('MMMM DD', date)}</p>
     *    </>;
     * }
     * ```
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_calendarview
     * @group Renderers_scheduler
     * @group Renderers_timeline
     */
    renderDayContent?(args: MbscCalendarDayData): any;
    /**
     * A render function to customize the events that appear on the agenda and the popover. It should return the markup of the event.
     * The event calendar will take care of the positioning, but everything else (like background color, hover effect, etc.) is left to you.
     *
     * If you are looking to customize only the content (ex. add custom elements) and don't want to bother with the styling of the event,
     *  you can use the [renderEventContent](#renderer-renderEventContent) option.
     *
     * The render function will receive an event object as parameter.
     * This data can be used to show event specific things on the agenda and popover.
     * The object passed to the function has computed properties, as well as a reference to the **original** event it comes from:
     * - allDay: String - The localized all-day text in case of all day events.
     * - end: String - The formatted end time, if the event is not all day.
     * - id: String - The id of the event.
     * - isMultiDay: Boolean - True if the event spans across multiple days.
     * - lastDay: Boolean - True if it's rendered on the last day of a multiple event.
     * - original: Object - The original event object.
     * - start: String - The formatted start time, if the event is not all day.
     * - title: String - The title of the event.
     *
     * @defaultValue undefined
     * @group Renderers
     * @group Renderers_agenda
     * @group Renderers_calendarview
     */
    renderEvent?(data: MbscCalendarEventData): any;
    /**
     * A render function to customize the event content that appears on the agenda and the popover.
     * It should return the markup that is added to the event. The event calendar will take care of styling
     * and you can focus on what you show inside of the event a.k.a the content.
     *
     * If you are looking to fully customize the event (ex. add custom hover effects) you will need to use the
     * [renderEvent](#renderer-renderEvent) option. In that case you will only get the positioning done
     * by the event calendar and everything else is up to you.
     *
     * The render function will receive an event object as parameter.
     * This data can be used to show event specific things on the agenda and popover.
     * The object passed to the function has computed properties, as well as a reference to the **original** event it comes from:
     * - allDay: String - The localized all-day text in case of all day events.
     * - end: String - The formatted end time, if the event is not all day.
     * - id: String - The id of the event.
     * - isMultiDay: Boolean - True if the event spans across multiple days.
     * - lastDay: Boolean - True if it's rendered on the last day of a multiple event.
     * - original: Object - The original event object.
     * - start: String - The formatted start time, if the event is not all day.
     * - title: String - The title of the event.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_agenda
     * @group Renderers_calendarview
     */
    renderEventContent?(data: MbscCalendarEventData): any;
    /**
     * A render function to customize the header of the event calendar. It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well as the built in header components of the calendar.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     */
    renderHeader?(): any;
    /**
     * A render function to to fully customize the labels that appear on the calendar. It should return the markup of the event.
     * The event calendar will take care of the positioning, but everything else (like background color, hover effect, etc.) is left to you.
     *
     * If you are looking to customize only the content (ex. add custom elements) and
     * don't want to bother with the styling of the label, you can use the [renderLabelContent](#renderer-renderLabelContent) option.
     *
     * The render function will receive an event object as parameter. This data can be used to show event specific things on the calendar.
     * The object passed to the function has computed properties, as well as a reference to the **original** event it comes from:
     * - end: String - Computed property. It holds the formatted end time, if the event is not all day.
     * - id: String -  It holds the id of the event. If there's no id on the event object, this property is generated.
     * - isMultiDay: Boolean - Computed property. It's true if the event spans across multiple days.
     * - original: Object -  Reference to the original event object. Any custom property on the event can be access through this property.
     * - start: String - Computed property. It holds the formatted start time, if the event is not all day.
     *
     * @defaultValue undefined
     * @group Renderers
     * @group Renderers_calendarview
     */
    renderLabel?(event: MbscCalendarEventData): any;
    /**
     * A render function to customize the label contents, that appears on the calendar.
     * It should return the markup that is added to the label.
     * The event calendar will take care of styling and you can focus on what you show inside of the label a.k.a the content.
     *
     * If you are looking to fully customize the label (ex. add custom hover effects) you will need to use the
     * [renderLabel](#renderer-renderLabel) option.
     * In that case you will only get the positioning done by the event calendar and everything else is up to you.
     *
     * The render function will receive an event object as parameter. This data can be used to show event specific things on the calendar.
     * The object passed to the function has computed properties, as well as a reference to the **original** event it comes from:
     * - end: String - Computed property. It holds the formatted end time, if the event is not all day.
     * - id: String -  It holds the id of the event. If there's no id on the event object, this property is generated.
     * - isMultiDay: Boolean - Computed property. It's true if the event spans across multiple days.
     * - original: Object -  Reference to the original event object. Any custom property on the event can be access through this property.
     * - start: String - Computed property. It holds the formatted start time, if the event is not all day.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_calendarview
     */
    renderLabelContent?(event: MbscCalendarEventData): any;
    /**
     * A render function to customize the resource template of the Scheduler/Timeline.
     * It takes a function that should return the desired markup. In the returned markup, you can use custom html as well.
     *
     * Example:
     * ```
     * const myCustomResourceTemplate = (resource: MbscResource) => {
     *  return <>
     *    <div>{resource.name}</div>
     *    <p>{resource.description}</p>
     *    <img src={resource.img} />
     *  </>
     * }
     * ```
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_scheduler
     * @group Renderers_timeline
     */
    renderResource?(resource: MbscResource): any;
    /**
     * A render function to add a custom footer for the timeline. It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well. This element only renders for the timeline view.
     *
     * The template will receive an object as data. This data can be used to show day specific things on the day footer.
     * The object passed to the template has the following properties:
     * - date: Date object - The specific date as a Date object.
     * - events: Array - The list of events of the day.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_timeline
     */
    renderDayFooter?(args: MbscCalendarDayData): any;
    /**
     * A render function to customize the empty cell content below the resource column.
     * It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well. This element only renders for the timeline view,
     * if the [renderDayFooter](#renderer-renderDayFooter) option is present.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_timeline
     */
    renderResourceFooter?(): any;
    /**
     * A render function to customize the empty cell content above the resource column.
     * It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_timeline
     */
    renderResourceHeader?(): any;
    /**
     * A render function to add a custom sidebar on the right side of the timeline. It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well. This element only renders for the timeline view.
     *
     * The template will receive the [resource](#opt-resources) object as data.
     * This data can be used to show resource specific things on the sidebar.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_timeline
     */
    renderSidebar?(resource: MbscResource): any;
    /**
     * A render function to customize the empty cell content above the sidebar column.
     * It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well.
     * This element only renders for the timeline view, if the [renderSidebar](#renderer-renderSidebar) option is present.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_timeline
     */
    renderSidebarHeader?(): any;
    /**
     * A render function to customize the empty cell content below the sidebar column.
     * It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well.
     * This element only renders for the timeline view, if the [renderSidebar](#renderer-renderSidebar) option is present.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_timeline
     */
    renderSidebarFooter?(): any;
    /**
     * A render function to customize the slot template of the Timeline view.
     * It takes a function that should return the desired markup.
     * In the returned markup, you can use custom html as well.
     *
     * It will receive an object as parameter and has the following properties:
     * - date: Date object - The specific date where the slot is rendered.
     * - slot: Object - Data of the rendered slot.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_timeline
     */
    renderSlot?(args: MbscSlotData): any;
    /**
     * A render function to customize the events that appear on the scheduler and timeline. It should return the markup of the event.
     * The event calendar will take care of the positioning, but everything else (like background color, hover effect, etc.) is left to you.
     *
     * If you are looking to customize only the content (ex. add custom elements) and don't want to bother with the styling of the event,
     * you can use the [renderScheduleEventContent](#renderer-renderScheduleEventContent) option.
     *
     * The render function will receive an event object as parameter. This data can be used to show event specific things on the scheduler.
     * The object passed to the function has computed properties, as well as a reference to the **original** event it comes from:
     * - allDay: String - The localized all-day text in case of all day events.
     * - end: String - The formatted end time, if the event is not all day.
     * - id: String - The id of the event.
     * - isMultiDay: Boolean - True if the event spans across multiple days.
     * - lastDay: Boolean - True if it's rendered on the last day of a multiple event.
     * - original: Object - The original event object.
     * - start: String - The formatted start time, if the event is not all day.
     * - title: String - The title of the event.
     * - currentResource: String, Number - Represents the resource of the row or column where the event is being rendered.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_scheduler
     * @group Renderers_timeline
     */
    renderScheduleEvent?(event: MbscCalendarEventData): any;
    /**
     * A render function to customize the event content that appears on the scheduler and timeline.
     * It should return the markup that is added to the event. The event calendar will take care of styling
     * and you can focus on what you show inside of the event a.k.a the content.
     *
     * If you are looking to fully customize the event (ex. add custom hover effects) you will need to use
     * the [renderScheduleEvent](#renderer-renderScheduleEvent) option. In that case you will only get
     * the positioning done by the event calendar and everything else is up to you.
     *
     * The render function will receive an event object as parameter. This data can be used to show event specific things on the scheduler.
     * The object passed to the function has computed properties, as well as a reference to the **original** event it comes from:
     * - allDay: String - The localized all-day text in case of all day events.
     * - end: String - The formatted end time, if the event is not all day.
     * - id: String - The id of the event.
     * - isMultiDay: Boolean - True if the event spans across multiple days.
     * - lastDay: Boolean - True if it's rendered on the last day of a multiple event.
     * - original: Object - The original event object.
     * - start: String - The formatted start time, if the event is not all day.
     * - title: String - The title of the event.
     * - currentResource: String, Number - Represents the resource of the row or column where the event is being rendered.
     *
     * @defaultValue undefined
     *
     * @group Renderers
     * @group Renderers_scheduler
     * @group Renderers_timeline
     */
    renderScheduleEventContent?(event: MbscCalendarEventData): any;
    /**
     * @event
     * Triggered when a cell is clicked on the calendar day, scheduler cell, or timeline cell.
     *
     * @param args
     * The event object has the following properties:
     *    - `date`: *Date* - The date of the clicked cell.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `events`: *Array<MbscCalendarEvent>* - The events for the clicked date.
     *    - `resource`: *string | number* - The id of the resource where the cell was clicked, if [resources](#opt-resources) are set.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `source`: *'calendar' | 'schedule' | 'timeline'* - The view where the cell was clicked.
     *    - `target`: *HTMLElement* - The DOM element of the clicked cell.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onCellClick?(args: MbscCellClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when a cell is double-clicked on the calendar day, scheduler cell, or timeline cell.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the clicked cell.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `events`: *Array<MbscCalendarEvent>* - The events for the clicked date.
     *    - `resource`: *string | number* - The id of the resource where the cell was clicked, if [resources](#opt-resources) are set.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `source`: *'calendar' | 'schedule' | 'timeline'* - The view where the cell was clicked.
     *    - `target`: *HTMLElement* - The DOM element of the clicked cell.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onCellDoubleClick?(args: MbscCellClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when the mouse pointer hovers a day on the calendar view (does not apply for agenda, schedule and timeline views).
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The selected date as a Date object.
     *    - `events`: *Array<MbscCalendarEvent>* - The events for the hovered day.
     *    - `labels`: *Array<MbscCalendarLabel>* - If the day has labels, contains the label objects for the hovered day.
     *    - `marked`: *Array<MbscCalendarMarked>*  If the day is marked, contains the marked objects for the hovered day.
     *    - `selected`: *boolean* - -  Specifies if the day is currently selected or not.
     *    - `target`: *HTMLElement* - The DOM element of the cell.
     * @param inst The component instance.
     * @group Events_calendarview
     */
    onCellHoverIn?(args: MbscCellHoverEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when the mouse pointer leaves a day on the calendar view (does not apply for agenda, schedule and timeline views).
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The selected date as a Date object.
     *    - `events`: *Array<MbscCalendarEvent>* - The events for the hovered day.
     *    - `labels`: *Array<MbscCalendarLabel>* - If the day has labels, contains the label objects for the hovered day.
     *    - `marked`: *Array<MbscCalendarMarked>*  If the day is marked, contains the marked objects for the hovered day.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not.
     *    - `target`: *HTMLElement* - The DOM element of the cell.
     * @param inst The component instance.
     * @group Events_calendarview
     */
    onCellHoverOut?(args: MbscCellHoverEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when a cell is right-clicked on the calendar, scheduler, or timeline grid .
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the clicked cell.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `events`: *Array<MbscCalendarEvent>* - The events for the clicked date.
     *    - `resource`: *string | number* - The id of the resource where the cell was clicked, if [resources](#opt-resources) are set.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `source`: *'calendar' | 'schedule' | 'timeline'* - The view where the cell was clicked.
     *    - `target`: *HTMLElement* - The DOM element of the clicked cell.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onCellRightClick?(args: MbscCellClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is clicked.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date on which the event was clicked.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `event`: *MbscCalendarEvent* - The clicked calendar event.
     *    - `resource`: *string | number* - The id of the resource where the event was clicked, if [resources](#opt-resources) are set.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `slot`: *string | number* - The id of the slot where the event was clicker, if [slots](#opt-slots) are set.
     *    - `source`: *'agenda' | 'calendar' | 'schedule' | 'timeline' | 'popover'* - The view where the event was clicked.
     * @param inst The component instance.
     * @group Events_agenda
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventClick?(args: MbscEventClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     *
     * Triggered when an event is about to create and it is not yet rendered on its final position.
     * Event creation can be prevented by returning `false` from the handler function.
     *
     * @param args The event argument with the following properties:
     *    - `action`: *'click' | 'drag' | 'externalDrop'* - The action which created the event.
     *    - `domEvent`: *Event* - The DOM event from the end of the gesture (mouseup or touchend).
     *    - `event`: *MbscCalendarEvent* - The newly created event.
     *    - `originEvent`: *MbscCalendarEvent* - The occurrence of the event which was dragged.
     * Will be set only if the event was created by dragging a recurring event occurrence.
     *    - `source`: *'calendar' | 'timeline' | 'schedule'* - The view where the event is being created.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventCreate?(args: MbscEventCreateEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is created and it is rendered in its position.
     *
     * @param args The event argument with the following properties:
     *    - `action`: *'click' | 'drag' | 'externalDrop'* - The action which created the event.
     *    - `event`: *MbscCalendarEvent* - The newly created event.
     *    - `source`: *'calendar' | 'timeline' | 'schedule'* - The view where the event was created.
     *    - `target`: *HTMLElement* - The DOM element of the created event.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventCreated?(args: MbscEventCreatedEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event creation failed due to overlapping an invalid range.
     *
     * @param args The event argument with the following properties:
     *    - `action`: *'click' | 'drag' | 'externalDrop'* - The action which created the event.
     *    - `event`: *MbscCalendarEvent* - The newly created event.
     *    - `invalid`: *object* - The invalid object which the event overlapped.
     *    - `originEvent`: *MbscCalendarEvent* - The occurrence of the event which was dragged.
     * Will be set only if the event was created by dragging a recurring event occurrence.
     *    - `source`: *'calendar' | 'timeline' | 'schedule'* - The view where the event was created.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventCreateFailed?(args: MbscEventCreateFailedEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is about to be deleted and it is not yet removed from the view.
     * Event deletion can be performed with delete and backspace button on an active event.
     * Deletion can be prevented by returning `false` from the handler function.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event from of the keydown action.
     *    - `event`: *MbscCalendarEvent* - The event being deleted.
     *    - `events`: *Array<MbscCalendarEvent>* - The events being deleted in case of multiple event selection.
     *    - `source`: *'agenda' | 'calendar' | 'timeline' | 'schedule'* - The view where the event is being deleted.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventDelete?(args: MbscEventDeleteEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is deleted and it is removed from the view.
     *
     * @param args The event argument with the following properties:
     *    - event: *MbscCalendarEvent* - The deleted event.
     *    - events: *Array<MbscCalendarEvent>* - The deleted events in case of multiple event selection.
     *    - source: *'agenda' | 'calendar' | 'timeline' | 'schedule'* - The view where the event was deleted.
     * @param inst The component instance.
     */
    onEventDeleted?(args: MbscEventDeletedEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is double-clicked.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date on which the event was clicked.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `event`: *MbscCalendarEvent* - The clicked calendar event.
     *    - `resource`: *string | number* - The id of the resource where the event was clicked, if [resources](#opt-resources) are set.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `slot`: *string | number* - The id of the slot where the event was clicker, if [slots](#opt-slots) are set.
     *    - `source`: *'agenda' | 'calendar' | 'schedule' | 'timeline' | 'popover'* - The view where the event was clicked.
     * @param inst The component instance.
     */
    onEventDoubleClick?(args: MbscEventClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event drag has ended.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event of the drag.
     *    - `event`: *MbscCalendarEvent* - The dragged calendar event.
     *    - `resource`: *string | number* - The id of the resource where the event was dragged, if [resources](#opt-resources) are set.
     *    - `slot`: *string | number* - The id of the slot where the event was dragged, if [slots](#opt-slots) are set.
     *    - `source`: *'calendar' | 'schedule' | 'timeline'* - The view where the event was dragged.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventDragEnd?(args: MbscEventDragEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event drag has started.
     *
     * @param args The event argument with the following properties:
     *    - `action`: *'create' | 'resize' | 'move'* - The user action which triggered the event.
     *    - `domEvent`: *Event* - The DOM event of the drag.
     *    - `event`: *MbscCalendarEvent* - The dragged calendar event.
     *    - `resource`: *string | number* - The id of the resource where the event is dragged, if [resources](#opt-resources) are set.
     *    - `slot`: *string | number* - The id of the slot where the event is dragged, if [slots](#opt-slots) are set.
     *    - `source`: *'calendar' | 'schedule' | 'timeline'* - The view where the event is dragged.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventDragStart?(args: MbscEventDragEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when the mouse pointer hovers an event on the calendar.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date on which the event is hovered.
     *    - `domEvent`: *Event* - The DOM event of the hover.
     *    - `event`: *MbscCalendarEvent* - The hovered calendar event.
     *    - `resource`: *string | number* - The id of the resource where the event is hovered, if [resources](#opt-resources) are set.
     *    - `slot`: *string | number* - The id of the slot where the event is hovered, if [slots](#opt-slots) are set.
     *    - `source`: *'agenda' | 'calendar' | 'schedule' | 'timeline' | 'popover'* - The view where the event is hovered.
     * @param inst The component instance.
     */
    onEventHoverIn?(args: MbscEventClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when the mouse pointer leaves an event on the calendar.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date on which the event was hovered.
     *    - `domEvent`: *Event* - The DOM event of the hover.
     *    - `event`: *MbscCalendarEvent* - The hovered calendar event.
     *    - `resource`: *string | number* - The id of the resource where the event was hovered, if [resources](#opt-resources) are set.
     *    - `slot`: *string | number* - The id of the slot where the event was hovered, if [slots](#opt-slots) are set.
     *    - `source`: *'agenda' | 'calendar' | 'schedule' | 'timeline' | 'popover'* - The view where the event was hovered.
     * @param inst The component instance.
     */
    onEventHoverOut?(args: MbscEventClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is right-clicked.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date on which the event was clicked.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `event`: *MbscCalendarEvent* - The clicked calendar event.
     *    - `resource`: *string | number* - The id of the resource where the event was clicked, if [resources](#opt-resources) are set.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `slot`: *string | number* - The id of the slot where the event was clicker, if [slots](#opt-slots) are set.
     *    - `source`: *'agenda' | 'calendar' | 'schedule' | 'timeline' | 'popover'* - The view where the event was clicked.
     * @param inst The component instance.
     */
    onEventRightClick?(args: MbscEventClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is about to update. Update can be prevented by returning `false` from the handler function.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event from the end of the gesture (mouseup or touchend).
     *    - `event`: *MbscCalendarEvent* - The updated event.
     *    - `events`: *Array<MbscCalendarEvent>* - The updated events.
     * It is set on recurring event delete, when [multiple event selection](#opt-selectMultipleEvents) is enabled.
     *    - `newEvent`: *MbscCalendarEvent* - The newly created event.
     * Will be set only if the dragged event was a recurring event occurrence.
     *    - `oldEvent`: *MbscCalendarEvent* - The original event before the update.
     *    - `oldEvents`: *Array<MbscCalendarEvent>* - The original events before the update.
     * It is set on recurring event delete, when [multiple event selection](#opt-selectMultipleEvents) is enabled.
     *    - `oldEventOccurrence`: *MbscCalendarEvent* - The occurrence of the event which was dragged.
     * Will be set only if the dragged event was a recurring event occurrence.
     *    - `source`: *'calendar' | 'timeline' | 'schedule'* - The view where the event is being updated.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventUpdate?(args: MbscEventUpdateEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is updated and is rendered in its new position.
     * This is where you update the event in your database or persistent storage.
     *
     * @param args The event argument with the following properties:
     *    - `event`: *MbscCalendarEvent* - The updated event.
     *    - `events`: *Array<MbscCalendarEvent>* - The updated events.
     * It is set on recurring event delete, when [multiple event selection](#opt-selectMultipleEvents) is enabled.
     *    - `oldEvent`: *MbscCalendarEvent* - The original event before the update.
     *    - `oldEvents`: *Array<MbscCalendarEvent>* - The original events before the update.
     * It is set on recurring event delete, when [multiple event selection](#opt-selectMultipleEvents) is enabled.
     *    - `source`: *'calendar' | 'timeline' | 'schedule'* - The view where the event was updated.
     *    - `target`: *HTMLElement* - The DOM element of the updated event.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventUpdated?(args: MbscEventUpdatedEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event update failed due to overlapping an invalid range.
     *
     * @param args The event argument with the following properties:
     *    - `event`: *MbscCalendarEvent* - The updated event.
     *    - `invalid`: *object* - The invalid object which the event overlapped.
     *    - `newEvent`: *MbscCalendarEvent* - The newly created event.
     * Will be set only if the dragged event was a recurring event occurrence.
     *    - `oldEvent`: *MbscCalendarEvent* - The original event before the update.
     *    - `oldEventOccurrence`: *MbscCalendarEvent* - The occurrence of the event which was dragged.
     * Will be set only if the dragged event was a recurring event occurrence.
     *    - `source`: *'calendar' | 'timeline' | 'schedule'* - The view where the event was updated.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onEventUpdateFailed?(args: MbscEventUpdateFailedEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when a label is clicked on the calendar.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the day on which the label was clicked.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `label`: *MbscCalendarLabel* - The original object of the label which was clicked, `undefined` in case of the "more" label.
     *    - `labels`: *Array<MbscCalendarLabel>* - An array containing each label object for the given day.
     *    - `target`: *HTMLElement* - The DOM element of the label.
     * @param inst The component instance.
     * @group Events_calendarview
     */
    onLabelClick?(args: MbscLabelClickEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when the calendar page is changed (with buttons or swipe).
     *
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageChange?(args: MbscPageChangeEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered before the markup of a calendar page is starting to render.
     *
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageLoading?(args: MbscPageLoadingEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when the calendar page is changed (with buttons or swipe) and the view finished rendering.
     *
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageLoaded?(args: MbscPageLoadedEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when a parent resource is collapsed on the timeline.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `resource`: *string | number* - The id of the collapsed [resource](#opt-resources).
     * @param inst The component instance.
     * @group Events_timeline
     */
    onResourceCollapse?(args: MbscResourceCollapseEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when a parent resource is expanded on the timeline.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `resource`: *string | number* - The id of the expanded [resource](#opt-resources).
     * @param inst The component instance.
     * @group Events_timeline
     */
    onResourceExpand?(args: MbscResourceExpandEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when the selected date is changed from the UI. You can use this event in conjunction with the
     * [selectedDate](#opt-selectedDate) option to customize where the event calendar should navigate.
     *
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The newly selected date.
     * @param inst The component instance.
     */
    onSelectedDateChange?(args: MbscSelectedDateChangeEvent, inst: EventcalendarBase): void;
    /**
     * @event
     * Triggered when an event is selected or deselected on the UI,
     * when [multiple event selection](#opt-selectMultipleEvents) is enabled.
     *
     * You can also select events programmatically using the [selectedEvents](#opt-selectedEvents) option.
     *
     * @param args The event argument with the following properties:
     *     - `events`: *Array<MbscCalendarEvent>* - The selected events.
     * @param inst The component instance.
     */
    onSelectedEventsChange?(args: MbscSelectedEventsChangeEvent, inst: EventcalendarBase): void;
}
export interface MbscEventList {
    date: string;
    events: MbscCalendarEventData[];
    timestamp: number;
}
export interface MbscSlot {
    /** This is an id that can be referenced in the events/invalids/colors data. */
    id: number | string;
    /** The name of the slot that will be displayed at the top of the slot column. */
    name?: string;
    color?: string;
    [x: string]: any;
}
export interface MbscSlotData {
    date: Date;
    slot: MbscSlot;
}
