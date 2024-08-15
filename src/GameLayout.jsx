import { InformationContainer } from './InformationContainer';
import { FieldContainer } from './FieldContainer';
import style from './GameLayout.module.css';

export function GameLayout(returnAgain) {
	return (
		<div className={style.game}>
			<InformationContainer />
			<FieldContainer />
			<button> Начать заново </button>
		</div>
	);
}
