import React from 'react';
import { StyledFooter, StyledLink } from '../static/styles/components/StyledFooter';

const Footer = () => (
	<StyledFooter>
		Created By{' '}
		<StyledLink href="https://twitter.com/estebansolo27" rel="noopener noreferrer" target="_blank">
			@estebansolo27
		</StyledLink>
	</StyledFooter>
);

export default React.memo(Footer);
