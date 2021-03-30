import * as React from 'react';
import styled from 'styled-components';
import { Select } from '../../components';
import { Flag } from '../Flag';
import * as FlagIcons from '../flags';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const LargeFlag = styled(Flag)`
    width: 4rem;
    height: 2.875rem;
    padding: 1rem;
`;

export const FlagSelector: React.FC = () => {
    const availableCountryCodes = Object.entries(FlagIcons).map(it => it[0]);
    const [selectedCountry, setSelectedCountry] = React.useState(availableCountryCodes[0]);

    return (
        <Container>
            <Select label="Country Code" width="14rem" mr={3} onChange={e => setSelectedCountry(e.target.value)}>
                {availableCountryCodes.map(it => (
                    <option value={it} key={it}>
                        {it}
                    </option>
                ))}
            </Select>

            <LargeFlag code={selectedCountry} />
        </Container>
    );
};
