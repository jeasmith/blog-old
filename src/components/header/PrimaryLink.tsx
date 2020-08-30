import React from 'react';

export type PrimaryLinkProps = {
    text: string,
    link: React.LinkHTMLAttributes<HTMLAnchorElement>
}

export const PrimaryLink: React.FunctionComponent<PrimaryLinkProps> = (props: PrimaryLinkProps) => {
   return (
       <a {...props.link} className='primary-link'>{props.text}</a>
   );
}