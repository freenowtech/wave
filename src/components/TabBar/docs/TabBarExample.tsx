import * as React from 'react';
import { TabBar } from '../TabBar';

const TabBarExample = ({ initiallySelected = 'Empire Strikes Back' }: { initiallySelected: string }) => {
    const items = ['A New Hope', 'Empire Strikes Back', 'Return of the Jedi'];

    return (
        <TabBar>
            {items.map(it => (
                <TabBar.Link
                    key={it}
                    href="#"
                    onClick={e => {
                        e.preventDefault();
                    }}
                    selected={initiallySelected === it}
                >
                    {it}
                </TabBar.Link>
            ))}
        </TabBar>
    );
};

export { TabBarExample };
