import Link from 'next/link'
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { BsBookmark, BsBookmarkFill, BsGearFill } from 'react-icons/bs';

import Constants from 'lib/constants';

import styles from './item.module.scss';


dayjs.extend(advancedFormat);

const Item = ({item}) => {
    const day = dayjs(item.created).format(Constants.DATE_FORMAT_FULL);

    return (
        <div className={styles.Item}>
            <div className={styles.Item__gradient}></div>
            <div className={styles.Item__entry}>
                <span className={styles.Item__date}>{day}</span>
                <p className={styles.Item__text}>{item.entry}</p>
            </div>
            <div className={styles.Item__buttons}>
                <button onClick={() => {
                    // toggle pinned attribute
                }}>
                    {item.pinned ? <BsBookmarkFill /> : <BsBookmark />}
                </button>

                <Link href={`/details/${item.id}`}>
                    <a>
                        <BsGearFill alt="View" />
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default Item;
