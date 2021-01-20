import dayjs from 'dayjs';
import { getGradient, getPattern } from 'lib/backgrounds';

import styles from './hanky.module.scss';

const Hanky = ({hanky}) => {

    const day = dayjs(hanky.created).format('dddd, MMMM D, YYYY');

    const gradient = {
        background: getGradient(),
    };
    const image = {
        backgroundImage: `url(${getPattern()})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className={styles.Hanky} style={gradient}>
            <div className={styles.Hanky__content} style={image}>
                <div className={styles.Hanky__text}>
                    {hanky.content}
                </div>
            </div>
            <div className={styles.Hanky__info}>
                {day}
            </div>
        </div>
    )
};
export default Hanky;
