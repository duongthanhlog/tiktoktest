import { MusicIcon, TagIcon } from '~/components/Icon';
import classNames from 'classnames/bind';
import styles from './DiscoverTags.module.scss';

const cx = classNames.bind(styles);

const disoveries = [
    { icon: TagIcon, title: 'suthatla' },
    { icon: TagIcon, title: 'mackedoi' },
    { icon: TagIcon, title: 'sangsangthaydoi' },
    { icon: MusicIcon, title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia' },
    { icon: MusicIcon, title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng' },
    { icon: MusicIcon, title: 'Thiên Thần Tình Yêu - RICKY STAR' },
    { icon: TagIcon, title: '7749hieuung' },
    { icon: TagIcon, title: 'genzlife' },
    { icon: MusicIcon, title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn' },
    { icon: MusicIcon, title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham' },
];

function DiscoverTags({ label }) {
    
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('tags')}>
                {disoveries.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={Math.random() * 1000}>
                            <Icon width="1.6rem" height="1.6rem" className={cx('icon')} />
                            <span className={cx('title')}>{item.title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DiscoverTags;
