// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TouchIdIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('icon-primary-default'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M13.896 19.315c-.155.715-.39 1.567-.747 2.45a.375.375 0 01-.695-.28 14.18 14.18 0 00.643-2.048c.27-.03.537-.072.8-.122zm-2.815 1.191a.374.374 0 11.712.238l-.333 1a.375.375 0 11-.712-.238zm4.673-7.741c.056.478.102 1.044.121 1.724.011.416.008.826-.001 1.232a21.06 21.06 0 01-.303 3.11l-.107.565c-.154.746-.348 1.47-.588 2.164a.375.375 0 01-.709-.245c.244-.707.439-1.446.59-2.209.093-.026.184-.054.275-.083l-.274.083c.197-.992.316-2.03.356-3.107l.015-.491a21.15 21.15 0 00-.003-.997 18.953 18.953 0 00-.097-1.48c.246-.079.487-.17.725-.266zm-5.511.571c.253.045.507.088.766.114.081.798.15 1.815.061 3.003l-.029.337c-.078.799-.23 1.668-.495 2.592a17.127 17.127 0 01-.126-.019l.126.019a15.12 15.12 0 01-.772 2.085.375.375 0 11-.682-.31c.298-.657.53-1.294.71-1.907l.108-.39c.236-.9.36-1.742.414-2.511l.02-.357a17.049 17.049 0 00-.101-2.656zm-.654-3.641a.54.54 0 01.134.034c.026.013.053.021.076.04.162.128.19.364.062.526a2.819 2.819 0 00-.611 1.768c0 .284.04.649.087 1.067l.003.033.004.034c.092.81.203 1.813.15 2.974-.252-.066-.5-.138-.743-.221l.089.03c.215.07.433.133.655.191a12.061 12.061 0 01-.48 2.875 12.855 12.855 0 01-.709 1.864.375.375 0 11-.678-.32 11.98 11.98 0 00.679-1.803h.001c.296-1.03.417-1.98.444-2.837.031-1.036-.07-1.934-.154-2.67-.016-.143-.028-.27-.042-.402h.001a8.193 8.193 0 01-.057-.816c0-.81.274-1.602.773-2.232a.37.37 0 01.316-.135zm6.896.7a.375.375 0 01.476.234 8.591 8.591 0 01.337 1.341l.043.258c.112.708.198 1.597.23 2.577.031.963.006 2.01-.103 3.062a15.712 15.712 0 01-.546 2.866.375.375 0 11-.719-.216c.207-.688.351-1.424.45-2.17l.063-.522c.09-.872.122-1.747.11-2.568l-.007-.366a20.865 20.865 0 00-.216-2.519c.08-.041.158-.084.236-.128l-.236.128c-.03-.197-.062-.383-.096-.546a7.873 7.873 0 00-.256-.955.375.375 0 01.234-.476zM7.19 17.813l.078.009c.202.044.33.244.286.446l-.017.072-.024.088c-.168.621-.584 1.665-.603 1.712a.375.375 0 11-.696-.279c.005-.012.457-1.146.595-1.701l.013-.052c.004-.02.016-.034.022-.052a.368.368 0 01.424-.235zM15.057 6.4a.375.375 0 01.518-.117 6.765 6.765 0 012.033 1.997c.415.626.733 1.319.925 2.064.038.136.087.336.142.588h-.001c.127.583.277 1.474.367 2.666.063.832.095 1.808.067 2.931-.145.147-.295.29-.449.428l.2-.183.25-.244a36.41 36.41 0 01-.174 2.758.375.375 0 11-.745-.075c.07-.701.114-1.357.143-1.976l.018-.48a29.75 29.75 0 00-.02-2.519l-.02-.35a20.413 20.413 0 00-.291-2.416l-.033-.172a10.69 10.69 0 00-.17-.73 6.185 6.185 0 00-.85-1.899 6.021 6.021 0 00-1.792-1.753.376.376 0 01-.118-.518zM13.834 17c.207.013.365.19.353.396-.003.052-.053.825-.291 1.918-.263.051-.529.093-.799.122.283-1.197.34-2.07.341-2.084a.37.37 0 01.396-.352zm-8.396-2.966c.267.232.543.452.834.656.07.773.063 1.655-.195 2.854v-.001c-.077.365-.177.755-.305 1.182l-.103.327a.375.375 0 01-.713-.23c.222-.692.369-1.282.463-1.805.209-1.165.152-1.983.048-2.77zm6.552-2.277a.374.374 0 01.44.296 14.497 14.497 0 01.18 1.416c.067.774.108 1.811.032 2.999a18.403 18.403 0 01-.337 2.546.375.375 0 11-.735-.152c.17-.823.266-1.622.316-2.368l.02-.353c.05-1.045.01-1.962-.049-2.648l-.016-.178a13.333 13.333 0 00-.146-1.118.375.375 0 01.295-.44zM4.021 9.511c.184.243.378.476.582.701-.149.6-.228 1.22-.228 1.85 0 .343.018.652.043.947l.036.379c.026.247.057.485.089.717.093.697.18 1.37.136 2.191a10.078 10.078 0 01-.125-.137l.125.138c-.022.421-.077.88-.187 1.405a.375.375 0 11-.734-.154 7.75 7.75 0 00.17-2.162c.094.128.192.255.292.38l-.054-.067-.239-.314a16.199 16.199 0 00-.128-1.18c-.086-.639-.175-1.299-.175-2.143l.003-.102c.115.174.235.345.36.512l-.11-.15-.248-.362a8.46 8.46 0 01.392-2.45zm16.375 5.427a.369.369 0 01.39.36c.016.458.026.943.026 1.452a.375.375 0 01-.75 0c0-.463-.009-.902-.023-1.32-.002-.034-.002-.07-.003-.104a.373.373 0 01.348-.385l.012-.003zM12 6.875c1.569 0 3.03.713 4.009 1.956a.37.37 0 01.072.292.37.37 0 01-.134.234.371.371 0 01-.451.002c-.027-.02-.055-.037-.077-.065A4.333 4.333 0 0012 7.625a4.345 4.345 0 00-3.47 1.744 4.46 4.46 0 00-.905 2.694c0 .154.005.292.013.425l.018.24c.013.157.03.314.05.485a22.6 22.6 0 01.16 2.384l-.258-.12.258.12c.005.239.009.491.009.777a.375.375 0 11-.75.002 39.04 39.04 0 00-.02-1.16l-.01-.266a20.85 20.85 0 00-.133-1.651 9.967 9.967 0 01-.087-1.223v-.014c0-1.112.351-2.142.942-2.987l.144-.196A5.093 5.093 0 0112 6.875zm2.166 6.383c.085.696.143 1.475.146 2.178a.375.375 0 01-.75.003 18.358 18.358 0 00-.137-2.052c.25-.036.497-.075.741-.129zM2.757 9.063l.076.013c.2.056.317.263.26.463-.094.339-.164.685-.22 1.034l-.001-.003c-.058.372-.098.744-.114 1.119l-.008.375c0 .529.026.996.079 1.418l.04.273c.085.532.22.99.41 1.4a.376.376 0 01-.682.315C2.184 14.575 2 13.524 2 12.064c0-.44.03-.879.087-1.313v.003c.046-.362.11-.717.194-1.068l.091-.35c.006-.02.02-.036.029-.055h-.002a.375.375 0 01.358-.218zM12 5.25a6.7 6.7 0 011.721.223.375.375 0 01-.192.726 5.913 5.913 0 00-3.425.117 9.882 9.882 0 01-.379-.081l.38.08A6.029 6.029 0 007.03 8.669a10.018 10.018 0 01-.639-.39l.423.265.216.125a6.066 6.066 0 00-1.002 2.838l-.232-.179.232.179a6.185 6.185 0 00-.028.556c0 .602.073 1.112.15 1.651.045.317.091.636.122.976a9.98 9.98 0 01-.834-.656l-.03-.214c-.078-.541-.158-1.101-.158-1.758 0-.379.038-.748.098-1.11.142-.867.441-1.68.874-2.406l.169-.268.179-.256A6.812 6.812 0 018.916 6.01c.119.038.239.075.36.109l-.36-.109A6.654 6.654 0 0112 5.25zm0-1.625c1.8 0 3.495.588 4.886 1.596a8.443 8.443 0 011.989 2.028 8.398 8.398 0 011.102 2.263c.035.109.074.216.104.328.063.23.229.899.387 1.961.07.461.137.99.194 1.602a.374.374 0 11-.746.069 29.763 29.763 0 00-.082-.768l-.032-.25a20.301 20.301 0 00-.4-2.247l-.018-.067a7.684 7.684 0 00-3.258-4.538l-.26-.163a7.558 7.558 0 00-6.668-.528.376.376 0 01-.279-.697A8.283 8.283 0 0112 3.625zm0 6.5c1.049 0 1.514.689 1.773 1.206.131.261.284 1.022.393 1.926a9.797 9.797 0 01-.741.129c-.106-.875-.245-1.564-.323-1.719-.285-.57-.594-.793-1.102-.793-.62 0-1.125.533-1.125 1.188 0 .181.031.457.071.806.02.177.042.373.063.582a9.878 9.878 0 01-.766-.114 81.71 81.71 0 00-.043-.383c-.041-.372-.075-.666-.075-.89 0-1.069.841-1.938 1.875-1.938zM12 8.5c1.014 0 1.954.437 2.618 1.142.363.386.646.85.803 1.375.062.197.218.772.332 1.748a9.94 9.94 0 01-.725.265c-.112-1.061-.278-1.648-.321-1.784a2.789 2.789 0 00-.992-1.404l-.166-.117A2.83 2.83 0 0012 9.25c-.301 0-.596.05-.879.146l-.056.02a.375.375 0 11-.256-.705l.071-.024A3.434 3.434 0 0112 8.5zm1.743-6.34l.075.007a9.916 9.916 0 014.488 2.091 10.035 10.035 0 011.674 1.751c.407.544.767 1.127 1.058 1.747l.164.368a10.154 10.154 0 01.707 2.655c.054.422.091.85.091 1.285v.061a.375.375 0 01-.375.375c-.028 0-.052-.01-.079-.016a.37.37 0 01-.296-.359v-.061c0-.506-.046-1.002-.124-1.489l-.074-.406a9.38 9.38 0 00-.468-1.559c.165-.276.317-.56.454-.853l-.293.574-.16.279a9.323 9.323 0 00-1.093-2.003 9.286 9.286 0 00-1.808-1.885 9.158 9.158 0 00-4.002-1.817.375.375 0 01.136-.737zm-6.61 3.035a.376.376 0 01.523.085.376.376 0 01.066.248.368.368 0 01-.15.276 7.659 7.659 0 00-1.883 1.95 6.779 6.779 0 01-.192-.163l.192.162a7.75 7.75 0 00-1.087 2.458 10.147 10.147 0 01-.58-.701 8.513 8.513 0 011.104-2.26l.208-.287a8.387 8.387 0 011.772-1.748zM4.02 6.01c.155.205.316.405.486.597a9.41 9.41 0 00-.761 1.249.43.43 0 01-.372.232.325.325 0 01-.147-.034c-.185-.093-.276-.287-.183-.472l.015-.03c.277-.55.603-1.063.962-1.542zm7.854-4.008a.375.375 0 01.005.75 9.183 9.183 0 00-5.568 1.969 9.24 9.24 0 00-1.804 1.886c-.17-.192-.332-.392-.487-.597a10.06 10.06 0 011.673-1.753l.274-.218a9.914 9.914 0 015.907-2.037z"
                    id="TouchIdIcon__a"
                />
            </defs>
            <use fill="currentColor" fillRule="nonzero" xlinkHref="#TouchIdIcon__a" />
        </svg>
    );
};
export default TouchIdIcon;
