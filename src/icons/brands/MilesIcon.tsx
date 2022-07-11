// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const MilesIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M10.403 9.82c-.062.229-.128.497-.2.803-.052.226-.266 1.19-.275 1.228a66.091 66.091 0 00-.28 1.36 224.112 224.112 0 00-.314 1.61l-.167.898c-.028.117-.04.169-.08.221a.335.335 0 01-.229.121.615.615 0 01-.21-.026c-.122-.035-.262-.035-.378-.07-.117-.034-.257-.037-.355-.092-.098-.054-.204-.087-.266-.167-.062-.08-.017-.29-.025-.41a2.052 2.052 0 01.015-.254c.018-.206.048-.464.089-.774.041-.31.092-.645.15-1.006.06-.376.124-.751.191-1.126l.205-1.14c.068-.369.135-.716.2-1.04.066-.325.127-.602.183-.831a.738.738 0 01.147-.297.339.339 0 01.233-.097.814.814 0 01.238.028c.093.023.506.072.59.067.109-.007.458.066.458.066.103.067.123.135.169.198.046.063.012.202.017.291.005.079-.083.337-.106.438zm3.897 4.142s.052.454.038.736c-.008.173-.094.554-.147.599a1.002 1.002 0 01-.295.143s-1.887.535-1.95.547c-.062.012-.366.11-.521.062-.53-.161-.75-.74-.795-.825a.737.737 0 01-.08-.306.887.887 0 01.024-.25l-.007.016c.027-.224.218-1.38.281-1.71a57.502 57.502 0 01.309-1.492c.007-.03.287-1.235.367-1.543.08-.308.156-.585.227-.833.087-.239.221-.363.402-.375.12-.007.262.013.424.06.162.046.316.11.462.188.146.079.271.165.375.26.104.094.16.188.165.28a.47.47 0 01-.008.122.981.981 0 01-.045.146l.008-.008c-.085.285-.175.6-.27.944-.096.345-.19.707-.284 1.086a120.544 120.544 0 00-.546 2.3c.19-.042.375-.085.557-.127.182-.042.528-.15.75-.164.125-.008.492-.113.559.144zm3.558-3.885a23.16 23.16 0 00-.126.426c-.013.043-.164.564-.216.727.229-.039.459-.068.69-.086l.056-.003a.818.818 0 01.37.047c.093.04.185.077.251.201 0 0 .11.26.144.362.033.103.061.31.064.356.012.21-.18.277-.305.326-.077.03-1.078.21-1.234.247a12.97 12.97 0 00-.558.143c-.036.105-.08.448-.115.57-.035.122-.07.238-.074.33.2-.047.938-.227 1.174-.263.183-.028.393-.123.545-.03.273.167.345.428.392.567 0 0 .166.375.112.627-.024.115-.06.182-.115.232-.056.049-.16.093-.312.133l-1.494.402c-.13.036-.421.088-.421.088a2.665 2.665 0 01-.47.094.928.928 0 01-.309-.028c-.09-.025-.91-.488-.934-.77-.01-.103-.127-.193-.136-.325a1.121 1.121 0 01.01-.23l.846-4.113.216-1.05c.024-.118.094-.172.094-.172.173-.164.313-.242.562-.31.176-.049 1.6-.218 1.742-.244.284-.052 1.085-.171 1.282.006.085.076.174.156.23.285v-.008c.06.114.103.209.13.284.025.075-.03.167-.01.252 0 0 .033.126.037.197.01.137-.017.236-.077.296s-.177.105-.35.135a36.674 36.674 0 00-1.69.299zM7.714 9.668c.111.162.153.322.122.463-.06.27-.137.628-.225 1.033l-.389 1.81-.034.16-.11.51c-.155.723-.298 1.385-.393 1.82-.059.268-.16.66-.264.982-.097.303-.537.174-.833.106-.422-.095-.677-.305-.632-.611.048-.323.047-.406.056-.53.01-.136.163-.907.234-1.245.129-.61.459-1.807.388-2.28-.18.326-.425.952-.664 1.559-.266.676-.517 1.315-.701 1.62-.015.025-.027.05-.04.076-.067.136-.15.303-.477.252-.477-.076-.73-.226-.801-.511a112.34 112.34 0 01-.488-2.13l-.004-.018-.528 2.457a87.73 87.73 0 01-.1.447c-.083.371-.177.792-.232 1.079-.023.12-.076.204-.156.249a.286.286 0 01-.122.034c-.084.005-.41-.116-.465-.139-.092-.038-.553-.383-.64-.45-.164-.127-.226-.442-.215-.608.015-.22.046-.46.086-.752.017-.129.05-.046.071-.184a38.625 38.625 0 01.407-2.14c.205-.933.435-1.815.633-2.373.256-.72.33-.718 1.232-.462.131.037.248.112.36.184l.119.073c.034.02.064.047.09.07.03.027.06.054.08.058.587.105.63.427.625.776-.007.395.066 1.448.073 1.574.216-.377.5-1.05.774-1.704.293-.697.57-1.355.777-1.697.155-.255.393-.335.772-.262.186.036.378.058.575.079.373.039.82.308 1.039.625zm15.48-1.193c.826.646 1.008 1.372.588 2.36-.123.29-.192.496-.384.58-.168.074-.408-.014-.624-.1-.141-.057-.455-.175-.539-.334-.128-.245-.02-.51.073-.768.042-.117.132-.24.18-.356.046-.177-.087-.268-.244-.212-.134.103-.3.233-.388.368-.278.426-.191.932.081 1.358a6.548 6.548 0 00.706.914c.101.11.19.22.268.33.615.877.49 1.779-.593 2.483-.469.304-.908.631-1.513.47a2.198 2.198 0 01-1.448-1.175c-.212-.428-.074-.897.183-1.285.148-.224.38-.19.551.014.174.206.305.457.505.629.142.122.405.28.553.21.124.034.096-.435.019-.588a7.12 7.12 0 00-.341-.595c-.139-.22-.283-.437-.419-.658a2.811 2.811 0 01-.375-.981 5.426 5.426 0 01-.017-.85 2.707 2.707 0 011.52-2.083c.544-.263 1.075-.341 1.538.172.034.038.079.065.12.097z"
                fill="#001E3E"
            />
        </svg>
    );
};

MilesIcon.defaultProps = {};
export default MilesIcon;
