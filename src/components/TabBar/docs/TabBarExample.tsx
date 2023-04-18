import React, { useEffect, useState } from 'react';
import { TabBar } from '../TabBar';

const TabBarExample = ({ initiallySelected = 'Empire Strikes Back' }: { initiallySelected: string }) => {
    const items = ['A New Hope', 'Empire Strikes Back', 'Return of the Jedi'];
    const [selected, setSelected] = useState(initiallySelected);

    useEffect(() => {
        setSelected(initiallySelected);
    }, [initiallySelected]);

    return (
        <TabBar>
            {items.map(it => (
                <TabBar.Link
                    key={it}
                    href="#"
                    onClick={e => {
                        e.preventDefault();
                        setSelected(it);
                    }}
                    selected={selected === it}
                >
                    {it}
                </TabBar.Link>
            ))}
        </TabBar>
    );
};

export { TabBarExample };
