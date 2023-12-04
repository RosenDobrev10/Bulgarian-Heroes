/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './NoResults.module.css';

export default function NoResults({ text, buttonText, textColor }) {
	const characters = text.split('');

	return (
		<div className={styles.waviy}>
			{characters.map((char, index) => (
				<span
					key={index}
					style={{ '--i': index + 1, color: textColor }}
					className={styles.waviySpan}
				>
					{char !== ' ' ? char : '\u00A0' }
				</span>
			))}
            {buttonText && (
                <Link 
                to='/add' 
                className=" bg-green-500 shadow-2xl hover:bg-gradient-to-b ml-5 from-white via-green-500 to-red-500 hover:text-white text-white font-semibold px-10 py-3 rounded-md mr-6"
                >
                {buttonText}
                </Link>
            )}
		</div>
	);
}
