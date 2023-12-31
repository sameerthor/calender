import { MbscCalendarEvent, MbscCalendarEventData, MbscResource } from '../../../shared/calendar-view/calendar-view.types';
import { IDatetimeProps } from '../../../util/datetime';
import { MbscSlot } from '../eventcalendar.types';
import { IDailyInvalids, IDayData } from './schedule-timeline-base.types';
export declare const DEF_ID = "mbsc-def";
/** @hidden */
export declare function checkInvalidCollision(invalids: {
    [key: string]: {
        [key: string]: IDailyInvalids;
    };
}, start: Date, end: Date, allDay: boolean | undefined, invalidateEvent: 'start-end' | 'strict' | undefined, exclusiveEndDates?: boolean): MbscCalendarEvent | boolean;
export declare function getEventLayoutStart(event: MbscCalendarEventData, s: IDatetimeProps, isListing: boolean | undefined, isTimeline: boolean | undefined, isDailyResolution: boolean | undefined, firstDay: Date, cols: IDayData[], colIndexMap: {
    [key: string]: number;
}): Date;
export declare function getEventLayoutEnd(event: MbscCalendarEventData, s: IDatetimeProps, isListing: boolean | undefined, isTimeline: boolean | undefined, isDailyResolution: boolean | undefined, lastDay: Date, cols: IDayData[], colIndexMap: {
    [key: string]: number;
}): Date;
/** @hidden */
export declare function calcLayout(s: IDatetimeProps, groups: MbscCalendarEventData[][][], event: MbscCalendarEventData, next: {
    [key: string]: number;
}, isListing?: boolean, isTimeline?: boolean, isDailyResolution?: boolean, firstDay?: Date, firstDayTz?: Date, lastDay?: Date, lastDayTz?: Date, cols?: any[], colIndexMap?: {
    [key: string]: number;
}): void;
/** @hidden */
export declare function roundStep(v: number): number;
/** @hidden */
export declare function getEventHeight(startDate: Date, endDate: Date, displayedTime: number, startTime: number, endTime: number): number;
/** @hidden */
export declare function getEventWidth(startDate: Date, endDate: Date, displayedTime: number, viewStart: Date, viewEnd: Date, startTime: number, endTime: number, startDay: number, endDay: number, fullDay?: boolean): number;
/** @hidden */
export declare function getEventStart(startDate: Date, startTime: number, displayedTime: number, viewStart?: Date, startDay?: number, endDay?: number): number;
/** @hidden */
export declare function getResourceMap(eventsMap: {
    [key: string]: MbscCalendarEvent[];
}, resources: MbscResource[], slots: MbscSlot[], hasResources: boolean, hasSlots: boolean): {
    [key: string]: {
        [key: string]: {
            [key: string]: MbscCalendarEvent[];
        };
    };
};
/** @hidden */
export declare function getCellDate(timestamp: number, ms: number): Date;
