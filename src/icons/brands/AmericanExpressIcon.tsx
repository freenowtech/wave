// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const AmericanExpressIcon: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path fill="#016FD0" d="M20 4v16H4V4.007z" />
                <path
                    d="M9.756 12.64l.284.372.293-.372H20v2.31s-.307.196-.598.199h-5.321l-.32-.396v.396h-1.05v-.675s-.144.094-.454.094H11.9v.58h-1.589l-.284-.379-.288.38H7.108V12.64h2.648zm2.39.31h-1.034v1.878h.48v-.593h.493c.417 0 .733-.222.733-.654 0-.357-.248-.631-.672-.631zm7.816 0h-.911c-.547 0-.735.29-.735.59 0 .339.205.563.573.563h.424c.138 0 .198.08.198.16 0 .082-.06.157-.198.157h-.937v.407h.997c.413 0 .611-.269.611-.597 0-.306-.178-.54-.588-.54h-.444a.163.163 0 01-.172-.163c0-.076.046-.155.197-.155h.788l.197-.423zm-1.718 0h-.911c-.547 0-.735.29-.735.59 0 .339.205.563.573.563h.424c.138 0 .198.08.198.16 0 .082-.06.157-.198.157h-.937v.407h.997c.413 0 .61-.269.61-.597 0-.306-.177-.54-.587-.54h-.444a.163.163 0 01-.172-.163c0-.076.046-.155.197-.155h.788l.197-.423zm-1.803 0h-1.528v1.877h1.528v-.407h-1.055v-.334h1.025v-.395h-1.025v-.322h1.055v-.42zm-2.378 0H13.02v1.877h.468v-.667h.197l.562.667h.572l-.616-.691a.571.571 0 00.513-.577c0-.396-.309-.61-.654-.61zm-4.476 0h-.59l.762.95-.744.927h.581l.43-.578.44.578h.59l-.745-.939.751-.939h-.566l-.455.588-.454-.588zm-.631 0H7.428v1.877h1.528v-.407H7.9v-.334h1.03v-.395h-1.03v-.322h1.055v-.42zm3.155.424c.135 0 .231.083.231.217 0 .125-.096.216-.232.216h-.518v-.433h.52zm1.913-.005c.129 0 .222.101.222.198 0 .125-.12.198-.215.198h-.542v-.396h.535zM5.646 9.354l.339.782v-.782h1.283l.202.565.195-.565h5.763v.284s.303-.284.8-.284l1.87.006.333.772v-.778h1.074l.296.443v-.443h1.084v2.508H17.8l-.283-.445v.445h-1.579l-.158-.395h-.425l-.156.395h-1.07c-.429 0-.702-.278-.702-.278v.278h-1.614l-.32-.395v.395H5.493l-.159-.395h-.423l-.157.395H4V10.75l.613-1.396h1.033zm4.837.309H8.956v1.878h1.527v-.408H9.43v-.334h1.03v-.395h-1.03v-.321h1.054v-.42zm1.313 0h-1.042v1.878h.469v-.667h.197l.56.667h.573l-.616-.692a.571.571 0 00.514-.577c0-.395-.31-.609-.655-.609zm5.54 0h-.595v1.878h.469V10.33l.779 1.21h.576V9.664h-.468v1.18l-.76-1.18zm-4.216 0h-.478v1.878h.478V9.663zm1.675 0h-.517c-.63 0-.93.396-.93.946 0 .537.303.932.802.932h.103l.197-.41h-.123c-.298 0-.505-.153-.505-.517 0-.306.18-.506.437-.506h.536v-.445zm1.087 0h-.61l-.806 1.878h.525l.148-.376h.864l.148.376h.536l-.805-1.878zm-7.246 0h-.74l-.423 1.213-.433-1.21-.745-.003v1.878h.468v-1.384l.498 1.384h.41l.496-1.384v1.384h.469V9.663zm-3.201 0h-.61l-.806 1.878h.524l.149-.376h.864l.148.376h.536l-.805-1.878zm10.135.437l.263.657h-.527l.264-.657zm-10.448 0l.264.657h-.528l.264-.657zm6.636-.017c.128 0 .221.1.221.198 0 .125-.12.197-.214.197h-.542v-.395h.535z"
                    fill="#FFF"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};
export default AmericanExpressIcon;
