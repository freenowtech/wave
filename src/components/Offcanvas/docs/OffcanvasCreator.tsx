import React, { FC, useState } from 'react';
import { Button, Headline, Text, TextButton } from '../..';
import { Offcanvas } from '../Offcanvas';

const offcanvasContent = dismiss => (
    <>
        <Headline as="h2">Add Note</Headline>
        <Text as="p" weak my={3}>
            Please keep in mind that comments are also read by other agents. Make sure to write comprehensible text.
        </Text>
        <Button onClick={dismiss}>Add Note</Button>
        <TextButton ml={1} onClick={dismiss}>
            Cancel
        </TextButton>
    </>
);

enum OffcanvasType {
    NONE,
    DEFAULT,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
    NON_DISMISSIBLE
}

const OffcanvasCreator: FC = () => {
    const [offcanvas, setOffcanvas] = useState(OffcanvasType.NONE);

    const openOffcanvas = (type: OffcanvasType) => () => {
        setOffcanvas(type);
    };

    const hideOffcanvas = () => {
        setOffcanvas(OffcanvasType.NONE);
    };

    return (
        <>
            <Button size="small" mr={1} onClick={openOffcanvas(OffcanvasType.DEFAULT)}>
                Default (Left) Offcanvas
            </Button>
            <Button size="small" mr={1} onClick={openOffcanvas(OffcanvasType.RIGHT)}>
                Right Offcanvas
            </Button>
            <Button size="small" mr={1} onClick={openOffcanvas(OffcanvasType.TOP)}>
                Top Offcanvas
            </Button>
            <Button size="small" mr={1} onClick={openOffcanvas(OffcanvasType.BOTTOM)}>
                Bottom Offcanvas
            </Button>
            <Button size="small" onClick={openOffcanvas(OffcanvasType.NON_DISMISSIBLE)}>
                Non-Dismissible Offcanvas
            </Button>

            {offcanvas === OffcanvasType.DEFAULT && (
                <Offcanvas side="left" onClose={hideOffcanvas}>
                    {offcanvasContent}
                </Offcanvas>
            )}
            {offcanvas === OffcanvasType.RIGHT && (
                <Offcanvas side="right" onClose={hideOffcanvas}>
                    {offcanvasContent}
                </Offcanvas>
            )}
            {offcanvas === OffcanvasType.TOP && (
                <Offcanvas side="top" onClose={hideOffcanvas}>
                    {offcanvasContent}
                </Offcanvas>
            )}
            {offcanvas === OffcanvasType.BOTTOM && (
                <Offcanvas side="bottom" onClose={hideOffcanvas}>
                    {offcanvasContent}
                </Offcanvas>
            )}
            {offcanvas === OffcanvasType.NON_DISMISSIBLE && (
                <Offcanvas onClose={hideOffcanvas} dismissible={false}>
                    {offcanvasContent}
                </Offcanvas>
            )}
        </>
    );
};

export { OffcanvasCreator };
