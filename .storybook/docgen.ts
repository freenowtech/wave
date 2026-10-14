import type { Symbol as TsSymbol, Type } from 'typescript';
import { Parser } from 'react-docgen-typescript';

// styled-components 6 gives styled components a generic call signature for the `as` prop, before the plain one.
// react-docgen-typescript takes its props from the first signature, which only has `as` and `forwardedAs`, so the
// ArgTypes tables of Button, Text, Label, Card and the other styled components lost their props. Read the plain
// signature instead.
// eslint-disable-next-line @typescript-eslint/unbound-method -- called with the parser as `this` below
const extractPropsFromTypeIfStatelessComponent = Parser.prototype.extractPropsFromTypeIfStatelessComponent;

Parser.prototype.extractPropsFromTypeIfStatelessComponent = function (this: Parser, type: Type): TsSymbol | null {
    const [first, ...others] = type.getCallSignatures();
    const plain = first?.getTypeParameters()?.length
        ? others.find(signature => !signature.getTypeParameters()?.length && signature.getParameters().length > 0)
        : undefined;

    return plain ? plain.getParameters()[0] : extractPropsFromTypeIfStatelessComponent.call(this, type);
};
