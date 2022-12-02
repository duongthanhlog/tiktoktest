import classNames from 'classnames/bind';
import styles from './DiscoverTag.module.scss';
import { TagIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function DiscoverTag({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('tags')}>
                <div>
                        <TagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>suthatla</span>
                </div>
                <div>
                        <TagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>mackedoi</span>
                </div>
                <div>
                        <TagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>sansangthaydoi</span>
                </div>
                <div>
                        <MusicIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>Yêu đơn phương là gì (MEE Remix)-MEEasdasdassaddasds</span>
                </div>
                <div>
                    <MusicIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng</span>
                </div>
                <div>
                        <MusicIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>Thiên Thần Tình Yêu - RICKY STAR</span>
                </div>
                <div>
                        <TagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>7749hieuung</span>
                </div>
                <div>
                        <TagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>genzlife</span>
                </div>
                <div>
                        <MusicIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>Tình Đã Đầy Một Tim - Huyền Tâm Môn</span>
                </div>
                <div>
                        <TagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <span>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</span>
                </div>
            </div>
        </div>
    );
}

export default DiscoverTag;
