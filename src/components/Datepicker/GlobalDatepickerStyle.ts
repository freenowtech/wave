import { createGlobalStyle } from 'styled-components';

// Position arrow automatically based on Tether
const GlobalDatepickerStyle = createGlobalStyle`
    .tether-target-attached-left {
        & > div {
            &::before {
                left: 6rem;
            }
        }
    }

    .tether-target-attached-right {
        & > div {
            &::before {
                right: 6rem;
            }
        }
    }

    .tether-target-attached-bottom {
        & > div {
            &::before {
                top: -0.625rem;
            }
        }
    }

    .tether-target-attached-top {
        & > div {
            &::before {
                bottom: -0.625rem;
                transform: rotate(-135deg);
            }
        }
    }
`;

export { GlobalDatepickerStyle };
