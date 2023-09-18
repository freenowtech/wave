import { Button, FlipTheme } from '@freenow/wave';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionItem = ({ label, onClick, disabled = false }: Props): JSX.Element => (
    <div>
        <FlipTheme>
            <Button onClick={onClick} disabled={disabled}>
                {label}
            </Button>
            <Button onClick={onClick} disabled={disabled}>
                {label}
            </Button>
        </FlipTheme>

        <div>
            <FlipTheme>
                <Button size="small" onClick={onClick} disabled={disabled}>
                    {label}
                </Button>
                <Button size="small" onClick={onClick} disabled={disabled}>
                    {label}
                </Button>
            </FlipTheme>

        </div>
    </div>
);
