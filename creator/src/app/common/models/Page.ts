import { Styles } from './nativescript/index';

export class Page {
    /**
     * If the page is the entry point/default rendered page for the application
     */
    defaultPage: boolean;
    /**
     * The displayed title for the page
     */
    title: string;
    /**
     * The routing url of the page, used for navigating to/from
     */
    routingUrl: string;
    /**
     * The styling attributes for the page
     */
    styles: Styles;

    constructor(options: Page = <Page>{}) {
        this.defaultPage = !!options.defaultPage;
        this.title = options.title || null;
        this.routingUrl = options.routingUrl || null;
        this.styles = options.styles || null;
    }

}
