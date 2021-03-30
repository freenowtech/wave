import * as React from 'react';
import { FlagProps } from './FlagProps';
import WW from './flags/WW';

interface State {
    hasError: boolean;
}

export class FlagErrorBoundary extends React.Component<FlagProps, State> {
    public static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    public componentDidUpdate(prevProps: Readonly<FlagProps>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.code != this.props.code) {
            this.setState({ hasError: false });
        }
    }

    public render() {
        if (this.state.hasError) {
            return <WW className={this.props.className} />;
        }

        return this.props.children;
    }
}
