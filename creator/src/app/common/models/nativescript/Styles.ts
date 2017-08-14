/**
 * The collection of supported styling selectors for NativeScript
 */
export class Styles {
    /**
     * Sets a solid-color value to the matched view’s foreground.
     */
    color: string;
    /**
     * Sets a solid-color value to the matched view’s background.
     */
    backgroundColor: string;
    /**
     * Sets the placeholder (hint) font color to matched views.
     */
    placeholderColor: string;
    /**
     * Sets a image url to the matched view’s background image.
     */
    backgroundImage: string;
    /**
     * Sets if/how the background image should be repeated. Possible values: repeat, repeat-x, repeat-y, no-repeat
     */
    backgroundRepeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
    /**
     * Sets the starting position of the background image. You can set the position with absolute, percent or alignment values.
     */
    backgroundPosition: string;
    /**
     * Sets the size of the background image. Possible values: "length length", "percent% percent%", "cover" or "contain".
     */
    backgroundSize: string;
    /**
     * Sets a border color to the matched view’s.
     */
    borderColor: string;
    /**
     * Sets a border width to the matched view’s.
     */
    borderWidth: number;
    /**
     * Sets a border radius to the matched view’s.
     */
    borderRadius: number;
    /**
     * Sets the font family of the matched view.
     */
    fontFamily: string;
    /**
     * Sets the font size of the matched view (only supports device-independent units).
     */
    fontSize: number;
    /**
     * Sets the font style of the matched view. Possible values: italic, normal.
     */
    fontStyle: 'italic' | 'normal';
    /**
     * Sets the font weight of the matched view Possible values: bold, normal.
     */
    fontWeight: 'bold' | 'normal';
    /**
     * Sets text alignment in the matched view. Possible values: left , center, right.
     */
    textAlignment: 'left' | 'center' | 'right';
    /**
     * Sets the text formatting. Possible values: none, line-through, underline.
     */
    textDecoration: 'none' | 'line-through' | 'underline';
    /**
     * Sets the text transform. Possible values: none, capitalize, uppercase, lowercase.
     */
    textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    /**
     * Sets the text letter spacing. (On Android API Level 21 and above.)
     */
    letterSpacing: number;
    /**
     * Sets the z-index. (On Android API Level 21 and above.)
     */
    zIndex: number;
    /**
     * Sets the clip-path. Supported shapes are circle, ellipse, rect and polygon. You can define your own shape using clippy
     */
    clipPath: string;

    constructor(options: Styles = <Styles>{}) {
        this.color = options.color || null;
        this.backgroundColor = options.backgroundColor || null;
        this.placeholderColor = options.placeholderColor || null;
        this.backgroundImage = options.backgroundImage || null;
        this.backgroundRepeat = options.backgroundRepeat || null;
        this.backgroundPosition = options.backgroundPosition || null;
        this.backgroundSize = options.backgroundSize || null;
        this.borderColor = options.borderColor || null;
        this.borderWidth = options.borderWidth || null;
        this.borderRadius = options.borderRadius || null;
        this.fontFamily = options.fontFamily || null;
        this.fontSize = options.fontSize || null;
        this.fontStyle = options.fontStyle || null;
        this.fontWeight = options.fontWeight || null;
        this.textAlignment = options.textAlignment || null;
        this.textDecoration = options.textDecoration || null;
        this.textTransform = options.textTransform || null;
        this.letterSpacing = options.letterSpacing || null;
        this.zIndex = options.zIndex || null;
        this.clipPath = options.clipPath || null;
    }

}
