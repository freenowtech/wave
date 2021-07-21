import React, { useState } from 'react';
import { Box, Input } from '../../components';
import * as BasicIcons from '../basic';
import * as BatteryIcons from '../battery';
import * as BrandIcons from '../brands';
import * as MobilityIcons from '../mobility';
import * as OptionsIcons from '../options';
import * as PaymentIcons from '../payment';
import * as TripIcons from '../trip';
import * as ServiceTypeIcons from '../service-type';

import { IconGrid } from './IconGrid';

export const SearchableIconGrid = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const visibleIcons = []
        .concat(Object.entries(BasicIcons))
        .concat(Object.entries(TripIcons))
        .concat(Object.entries(BatteryIcons))
        .concat(Object.entries(MobilityIcons))
        .concat(Object.entries(OptionsIcons))
        .concat(Object.entries(PaymentIcons))
        .concat(Object.entries(BrandIcons))
        .concat(Object.entries(ServiceTypeIcons));

    return (
        <>
            <Input
                width="100%"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search icons..."
            />
            <Box>
                <IconGrid
                    entries={visibleIcons.filter(it => {
                        if (searchQuery) {
                            return !!it[0].toLowerCase().includes(searchQuery.toLowerCase());
                        }

                        return true;
                    })}
                />
            </Box>
        </>
    );
};
