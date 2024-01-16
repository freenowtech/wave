import { IconProps, ForwardLastIcon, MagnifierIcon } from '@freenow/wave';

export enum CampaignType {
    REGULAR = 'REGULAR',
    AUTOMATION = 'AUTOMATION'
}

export const CampaignTypeOptions: { icon: React.FC<IconProps>; type: CampaignType }[] = [
    { icon: ForwardLastIcon, type: CampaignType.REGULAR },
    { icon: MagnifierIcon, type: CampaignType.AUTOMATION }
];
