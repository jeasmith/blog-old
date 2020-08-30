import React from 'react';
import './styles.scss';
import { PrimaryLink, PrimaryLinkProps } from './PrimaryLink'

export type HeaderProps = {
    siteName: string,
    primaryLinks: PrimaryLinkProps[]
};

export const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {

    return (
        <header className='header'>
            <div className='site-name'>
                {props.siteName}
            </div>
            <nav>
                <ul>
                {
                    props.primaryLinks.map(primaryLink => (
                        <li>
                            <PrimaryLink {...primaryLink} />
                        </li>
                    ))
                }
                </ul>
            </nav>
        </header>
    );  
};