import React from 'react';

export type FooterProps = {
    title: string;
}

export const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
    return (
        <footer className='footer'>
            <div>
                {props.title}
            </div>
        </footer>
    );
}