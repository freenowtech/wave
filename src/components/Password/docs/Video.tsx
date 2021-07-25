import React, { FC } from 'react';

interface VideoProps {
    src: string;
}

// eslint-disable-next-line jsx-a11y/media-has-caption
export const Video: FC<VideoProps> = ({ src }: VideoProps) => <video src={src} controls />;
