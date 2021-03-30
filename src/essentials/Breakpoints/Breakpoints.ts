export interface BreakpointsArray extends Array<string> {
    small?: string;
    medium?: string;
    large?: string;
    xlarge?: string;
}
const Breakpoints: BreakpointsArray = ['30rem', '48rem', '62rem', '75rem'];
Breakpoints.small = Breakpoints[0];
Breakpoints.medium = Breakpoints[1];
Breakpoints.large = Breakpoints[2];
Breakpoints.xlarge = Breakpoints[3];

const MediaQueries = {
    small: `@media screen and (min-width: ${Breakpoints[0]})`,
    medium: `@media screen and (min-width: ${Breakpoints[1]})`,
    large: `@media screen and (min-width: ${Breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${Breakpoints[3]})`
};

export { Breakpoints, MediaQueries };
