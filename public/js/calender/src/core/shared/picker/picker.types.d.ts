import { IBaseProps } from '../../base';
import { MbscPopupButton, MbscPopupDisplay, MbscPopupPredefinedButton } from '../../components/popup/popup.types.public';
import { DateType, IValidateProps } from '../../util/datetime';
/**
 * Options for all picker components
 */
export interface IPickerProps extends IBaseProps {
    /** @hidden */
    defaultValue?: any;
    /** @hidden */
    value?: any;
    /** @hidden */
    element?: any;
    /** @hidden */
    inputComponent?: any;
    /** @hidden */
    inputProps?: any;
    /** @hidden */
    valueMap?: any;
    /** @hidden */
    modelValue?: any;
    invalid?: DateType[] | IValidateProps[];
    valid?: DateType[] | IValidateProps[];
    /**
     * Default selection which appears on the picker. The provided value will not be set as picker value, it's only a pre-selection.
     * @defaultValue undefined
     */
    defaultSelection?: any;
    /**
     * Allow the typing into the input field in desktop mode.
     * @defaultValue true
     */
    inputTyping?: boolean;
    /**
     * If `true`, multiple selection will be enabled.
     * @defaultValue false
     */
    selectMultiple?: boolean;
    /**
     * If `true`, it will render an input field for the component.
     * @defaultValue true
     */
    showInput?: boolean;
    /**
     * Opens the component on element focus.
     * @defaultValue false on desktop, true on mobile
     */
    showOnFocus?: boolean;
    /**
     * Opens the component on element click/tap.
     * @defaultValue true
     */
    showOnClick?: boolean;
    /**
     * If `true` and used with [multiple selection](#opt-selectMultiple),
     * it will display the selected values inside the input as tags (chips).
     * @defaultValue false
     */
    tagInput?: boolean;
    /**
     * {@inheritDoc MbscInputOptions.disabled}
     * @defaultValue false
     */
    disabled?: boolean;
    /** @hidden */
    dropdown?: boolean;
    /**
     * {@inheritDoc MbscInputOptions.endIcon}
     * @defaultValue undefined
     */
    endIcon?: string;
    /** @hidden */
    endIconSrc?: string;
    /** @hidden */
    endIconSvg?: string;
    /**
     * {@inheritDoc MbscInputOptions.error}
     * @defaultValue false
     */
    error?: boolean;
    /**
     * {@inheritDoc MbscInputOptions.errorMessage}
     * @defaultValue undefined
     */
    errorMessage?: string;
    /**
     * {@inheritDoc MbscInputOptions.inputStyle}
     * @defaultValue undefined
     */
    inputStyle?: 'underline' | 'outline' | 'box';
    /**
     * {@inheritDoc MbscInputOptions.label}
     * @defaultValue undefined
     */
    label?: string;
    /**
     * {@inheritDoc MbscInputOptions.labelStyle}
     * @defaultValue undefined
     */
    labelStyle?: 'floating' | 'stacked' | 'inline';
    /** @hidden */
    name?: string;
    /** @hidden */
    placeholder?: string;
    /**
     * {@inheritDoc MbscInputOptions.startIcon}
     * @defaultValue undefined
     */
    startIcon?: string;
    /** @hidden */
    startIconSrc?: string;
    /** @hidden */
    startIconSvg?: string;
    /** @hidden */
    activeElm?: HTMLElement | string;
    /**
     * {@inheritDoc MbscPopupOptions.anchor}
     * @defaultValue undefined
     */
    anchor?: HTMLElement;
    /** @hidden */
    anchorAlign?: 'start' | 'end' | 'center';
    /**
     * {@inheritDoc MbscPopupOptions.animation}
     * @defaultValue undefined
     */
    animation?: 'pop' | 'slide-down' | 'slide-up' | boolean;
    /**
     * {@inheritDoc MbscPopupOptions.buttons}
     * @defaultValue ['set', 'cancel']
     */
    buttons?: Array<MbscPopupButton | MbscPopupPredefinedButton | string>;
    /**
     * {@inheritDoc MbscPopupOptions.closeOnEsc}
     * @defaultValue true
     */
    closeOnEsc?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.closeOnOverlayClick}
     * @defaultValue true
     */
    closeOnOverlayClick?: boolean;
    /** @hidden */
    closeOnScroll?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.context}
     * @defaultValue 'body'
     */
    context?: string | HTMLElement;
    /**
     * {@inheritDoc MbscPopupOptions.display}
     * @defaultValue undefined
     */
    display?: MbscPopupDisplay;
    /**
     * {@inheritDoc MbscPopupOptions.focusOnClose}
     * @defaultValue true
     */
    focusOnClose?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.focusOnOpen}
     * @defaultValue true
     */
    focusOnOpen?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.focusTrap}
     * @defaultValue true
     */
    focusTrap?: boolean;
    /** @hidden */
    fullScreen?: boolean;
    /**
     * Specifies a custom string which appears in the picker header.
     * If it contains the `'{value}'` string, it will be replaced with the selected value of the picker.
     * @defaultValue undefined
     */
    headerText?: string;
    /** @hidden */
    height?: string | number;
    /**
     * {@inheritDoc MbscPopupOptions.isOpen}
     * @defaultValue false
     */
    isOpen?: boolean;
    /** @hidden */
    maxHeight?: string | number;
    /** @hidden */
    maxWidth?: string | number;
    /** @hidden */
    scrollLock?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.showArrow}
     * @defaultValue true
     */
    showArrow?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.showOverlay}
     * @defaultValue true
     */
    showOverlay?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.touchUi}
     * @defaultValue 'auto'
     */
    touchUi?: boolean | 'auto';
    /** @hidden */
    width?: string | number;
    /**
     * {@inheritDoc MbscPopupOptions.cancelText}
     * @defaultValue 'Cancel'
     * @group Localizations
     */
    cancelText?: string;
    /** @hidden */
    clearText?: string;
    /**
     * {@inheritDoc MbscPopupOptions.closeText}
     * @defaultValue 'Close'
     * @group Localizations
     */
    closeText?: string;
    /**
     * {@inheritDoc MbscPopupOptions.okText}
     * @defaultValue 'Ok'
     * @group Localizations
     */
    okText?: string;
    /**
     * {@inheritDoc MbscPopupOptions.setText}
     * @defaultValue 'Set'
     * @group Localizations
     */
    setText?: string;
    /**
     * @event
     * Triggered when the picker is canceled.
     * @param args The event argument with the following properties:
     *    - `value`: *any* - The selected value.
     *    - `valueText`: *string* - The selected value as text.
     * @param inst The component instance.
     */
    onCancel?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the value is changed.
     * @param args The event argument with the following properties:
     *    - `value`: *any* - The selected value.
     *    - `valueText`: *string* - The selected value as text.
     * @param inst The component instance.
     */
    onChange?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the component is closed.
     * @param args The event argument with the following properties:
     *    - `value`: *any* - The selected value.
     *    - `valueText`: *string* - The selected value as text.
     * @param inst The component instance.
     */
    onClose?(args: any, inst: any): void;
    /**
     * @event
     * {@inheritDoc MbscPopupOptions.onOpen}
     */
    onOpen?(args: any, inst: any): void;
    /** @hidden */
    onResize?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the temporary value is changed.
     * @param args The event argument with the following properties:
     *    - `value`: *any* - The selected value.
     * @param inst The component instance.
     */
    onTempChange?(args: any, inst: any): void;
}
export interface IPickerState {
    isOpen?: boolean;
    value?: any;
    width?: number;
}
