import React, { useState } from 'react';
import { Subheading } from '@storybook/addon-docs';
import { Box, Input } from '../../components';
import * as ActionsIcons from '../actions';
import * as ArrowsIcons from '../arrows';
import * as BasicIcons from '../basic';
import * as BatteryIcons from '../battery';
import * as BrandIcons from '../brands';
import * as CitiesIcons from '../cities';
import * as MobilityIcons from '../mobility';
import * as NavigationIcons from '../navigation';
import * as OptionsIcons from '../options';
import * as PaymentIcons from '../payment';
import * as TripIcons from '../trip';
import * as ServiceTypeIcons from '../service-type';

import { IconGrid } from './IconGrid';

export const SearchableIconGrid = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const visibleIcons = {
        Actions: Object.entries(ActionsIcons),
        'Arrows & Chevron': Object.entries(ArrowsIcons),
        Basic: Object.entries(BasicIcons),
        Cities: Object.entries(CitiesIcons),
        Trip: Object.entries(TripIcons),
        'Battery & Fuel': Object.entries(BatteryIcons),
        Mobility: Object.entries(MobilityIcons),
        Navigation: Object.entries(NavigationIcons),
        Options: Object.entries(OptionsIcons),
        Payment: Object.entries(PaymentIcons),
        Brand: Object.entries(BrandIcons),
        'Service Type': Object.entries(ServiceTypeIcons)
    };

    return (
        <>
            <Input
                mt={2}
                mb={4}
                width="100%"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search icons..."
            />
            <Box mb={3}>
                {!searchQuery ? (
                    Object.entries(visibleIcons).map(([title, icons]) => (
                        <>
                            <Subheading>{title}</Subheading>
                            <br />
                            <IconGrid entries={icons} />
                        </>
                    ))
                ) : (
                    <IconGrid
                        entries={Object.entries(visibleIcons)
                            .flatMap(([, icons]) => icons)
                            .filter(it => {
                                if (searchQuery) {
                                    return !!it[0].toLowerCase().includes(searchQuery.toLowerCase());
                                }

                                return true;
                            })}
                    />
                )}
            </Box>
        </>
    );
};
