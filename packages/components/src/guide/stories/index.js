/**
 * External dependencies
 */
import { times } from 'lodash';
import { text, number } from '@storybook/addon-knobs';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Button from '../../button';
import Guide from '../';
import GuidePage from '../page';

export default { title: 'Components|Guide', component: Guide };

const ModalExample = ( { numberOfPages, ...props } ) => {
	const [ isOpen, setOpen ] = useState( false );

	const openGuide = () => setOpen( true );
	const closeGuide = () => setOpen( false );

	const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	return (
		<>
			<Button isDefault onClick={ openGuide }>Open Guide</Button>
			{ isOpen && (
				<Guide { ...props } onFinish={ closeGuide }>
					{ times( numberOfPages, ( page ) => (
						<GuidePage key={ page }>
							<h1>Page { page + 1 } of { numberOfPages }</h1>
							<p>{ loremIpsum }</p>
						</GuidePage>
					) ) }
				</Guide>
			) }
		</>
	);
};

export const _default = () => {
	const finishButtonText = text( 'finishButtonText', 'Finish' );
	const numberOfPages = number( 'numberOfPages', 3, { range: true, min: 1, max: 10, step: 1 } );

	const modalProps = {
		finishButtonText,
		numberOfPages,
	};

	return <ModalExample { ...modalProps } />;
};
