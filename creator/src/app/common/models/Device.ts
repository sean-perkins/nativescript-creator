export type SupportedDevices = 'ipad' | 'iphone';
export type Orientation = 'portrait' | 'landscape';
export type OperatingSystem = 'ios' | 'android';

export class Device {
    /**
     * The orientation of the device preview
     */
    orientation: Orientation;
    /**
     * The active device render for the preview
     */
    deviceType: SupportedDevices;
    /**
     * The operating system of the device
     */
    operatingSystem: OperatingSystem;

    constructor(options: Device = <Device>{}) {
        this.orientation = options.orientation || 'landscape';
        this.deviceType = options.deviceType || 'iphone';
        this.operatingSystem = options.operatingSystem || 'ios';
    }

    get isIpad(): boolean {
        return this.deviceType === 'ipad';
    }

    get isIphone(): boolean {
        return this.deviceType === 'iphone';
    }

    get isPortrait(): boolean {
        return this.orientation === 'portrait';
    }

    get isLandscape(): boolean {
        return this.orientation === 'landscape';
    }

    /**
     * The image location for the device preview
     */
    get imageRender(): string {
        return `assets/img/${this.deviceType}-skin-${this.orientation}.png`;
    }

}
