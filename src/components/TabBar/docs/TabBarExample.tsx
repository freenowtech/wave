import * as React from 'react';
import { TabBar } from '../TabBar';

const TabBarExample = () => {
    const items = ['A New Hope', 'Empire Strikes Back', 'Return of the Jedi'];
    const [selected, setSelected] = React.useState(items[0]);

    return (
        <TabBar my={5}>
            {items.map((it, index) => (
                <TabBar.Link key={index} href="#" onClick={() => setSelected(it)} selected={selected == it}>
                    {it}
                </TabBar.Link>
            ))}
        </TabBar>
    );
};

export { TabBarExample };
