/**
 * transition - Helper function to generate transition properties rule
 */
type Transition = (properties: string[], duration: string, timingFunction: string) => string | null;

const mapTransitions: Transition = (properties, duration, timingFunction) =>
    properties.map(property => `${property} ${duration} ${timingFunction}`).join(',');

export { mapTransitions };
