export interface AccordionProps {
    /**
     * Heading of the Accordion section
     */
    heading?: string;
    /**
     * Description of the section
     */
    description?: string;
    /**
     * Extra text below description
     */
    info?: string;
    /**
     * Text on the button
     */
    buttonLabel?: string;
    /**
     * UI style
     * @default default
     */
    variant?: 'compact' | 'default';
    /**
     * Render accordion initially opened
     * @default false
     */
    defaultExpanded?: boolean;
    /**
     * Callback, runs after the accordion is opened
     */
    onExpand?: () => void;
    /**
     * Callback, runs after the accordion is closed
     */
    onCollapse?: () => void;
}
