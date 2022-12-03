import classNames from 'classnames/bind';
import styles from './DiscoverTags.module.scss';
import DiscoverItem from '~/layouts/components/DiscoverTags/DiscoverItem';
import { MusicIcon, TagIcon } from '~/components/Icons';
import Seperate from '../Sidebar/Seperate';

const cx = classNames.bind(styles);

function DiscoverTags({ label }) {
    return (
        <div>
            <Seperate />
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>
                <div className={cx('tags')}>
                    <DiscoverItem
                        icon={<MusicIcon width="1.6rem" height="1.6rem" className={cx('icon')} />}
                        title="mackedoi"
                    />
                    <DiscoverItem
                        icon={<MusicIcon width="1.6rem" height="1.6rem" className={cx('icon')} />}
                        title="mackedoi"
                    />
                    <DiscoverItem
                        icon={<MusicIcon width="1.6rem" height="1.6rem" className={cx('icon')} />}
                        title="mackedoi"
                    />
                    <DiscoverItem
                        icon={<TagIcon width="1.6rem" height="1.6rem" className={cx('icon')} />}
                        title="mackedoiád"
                    />
                    <DiscoverItem
                        icon={<TagIcon width="1.6rem" height="1.6rem" className={cx('icon')} />}
                        title="mackádaedoi"
                    />
                    <DiscoverItem
                        icon={<TagIcon width="1.6rem" height="1.6rem" className={cx('icon')} />}
                        title="mackedoi"
                    />
                </div>
            </div>
        </div>
    );
}

export default DiscoverTags;
