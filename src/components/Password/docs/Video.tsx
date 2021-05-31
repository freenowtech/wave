import React from 'react';

export const Video = ({ src }: { src: string }) => {
    return <video src={src} controls />;
};
