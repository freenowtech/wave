import React, { type ReactElement, type ComponentType } from 'react';
import {
    Tabs as BaseTabs,
    TabList as BaseTabList,
    Tab as BaseTab,
    TabPanel as BaseTabPanel,
    type TabsProps,
    type TabListProps,
    type TabProps,
    type TabPanelProps
} from 'react-aria-components';
import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';
import { textStyles } from '../Text/Text';

const StyledTabs = styled(BaseTabs as ComponentType<TabsProps>)`
    display: flex;
    gap: ${get('space.4')};

    &[data-orientation='vertical'] {
        flex-direction: row;
    }

    &[data-orientation='horizontal'] {
        flex-direction: column;
    }
`;

const StyledTabList = styled(BaseTabList as ComponentType<TabListProps<Record<string, unknown>>>)`
    display: flex;
    gap: ${get('space.4')};

    &[data-orientation='vertical'] {
        flex-direction: column;
    }

    &[data-orientation='horizontal'] {
        flex-direction: row;
    }
`;

const StyledTab = styled(BaseTab as ComponentType<TabProps>)`
    position: relative;
    cursor: pointer;
    outline: none;
    padding: ${get('space.2')} 0;
    ${textStyles.variants.label1};
    color: ${getSemanticValue('on-surface-variant')};
    transition: color 200ms ease;

    display: flex;
    align-items: center;
    justify-content: center;

    &[data-hovered] {
        color: ${getSemanticValue('on-surface')};
    }

    &[data-selected] {
        color: ${getSemanticValue('accent')};
    }

    &[data-disabled] {
        color: ${getSemanticValue('on-surface-variant')};
        opacity: 0.38;
        cursor: default;
    }

    &::after {
        content: '';
        position: absolute;
        background: ${getSemanticValue('accent')};
        opacity: 0;
        transition: opacity 200ms ease;
    }

    [data-orientation='vertical'] &::after {
        top: 50%;
        transform: translateY(-50%);
        right: -1px;
        width: 2px;
        height: 85%;
    }

    [data-orientation='horizontal'] &::after {
        left: 50%;
        transform: translateX(-50%);
        bottom: -1px;
        height: 2px;
        width: 85%;
    }

    &[data-selected]::after {
        opacity: 1;
    }

    &[data-focus-visible] {
        outline: 0.125rem solid ${getSemanticValue('accent')};
        outline-offset: 0.125rem;
    }
`;

const StyledTabPanel = styled(BaseTabPanel as ComponentType<TabPanelProps>)`
    outline: none;
    ${textStyles.variants.body1};
`;

function Tabs(props: TabsProps): ReactElement {
    return <StyledTabs {...props} />;
}

function TabList<T extends Record<string, unknown>>(props: TabListProps<T>): ReactElement {
    return <StyledTabList {...props} />;
}

function Tab(props: TabProps): ReactElement {
    return <StyledTab {...props} />;
}

function TabPanel(props: TabPanelProps): ReactElement {
    return <StyledTabPanel {...props} />;
}

export { Tabs, TabList, Tab, TabPanel };
