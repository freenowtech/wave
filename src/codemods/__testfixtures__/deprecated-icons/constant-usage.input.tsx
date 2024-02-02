import { IconProps, ForwardSmallIcon, SearchSmallIcon } from '@freenow/wave';

export enum CampaignType {
    REGULAR = 'REGULAR',
    AUTOMATION = 'AUTOMATION'
}

export const CampaignTypeOptions: { icon: React.FC<IconProps>; type: CampaignType }[] = [
    { icon: ForwardSmallIcon, type: CampaignType.REGULAR },
    { icon: SearchSmallIcon, type: CampaignType.AUTOMATION }
];
