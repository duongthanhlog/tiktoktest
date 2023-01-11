import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('heading')}>Tải video lên</p>
            <p className={cx('title')}>Đăng video vào tài khoản của bạn</p>
            <div className={cx('content')}>
                <label htmlFor="file" className={cx('upload_area')}>
                    <input id="file" type="file" hidden />
                    <FontAwesomeIcon icon={faCloudArrowUp} className={cx('upload_icon')} />
                    <div className={cx('text-main')}>Chọn video để tải lên</div>
                    <div className={cx('text-sub')}>Hoặc kéo và thả tập tin</div>
                    <div className={cx('text')}>
                        <p>MP4 hoặc WebM</p>
                        <p>Độ phân giải 720x1280 trở lên</p>
                        <p>Tối đa 30p</p>
                        <p>Nhỏ hơn 2GB</p>
                    </div>
                    <Button className={cx('upload_btn')} primary>
                        <label htmlFor="file">Chọn tập tin</label>
                    </Button>
                </label>
                <div className={cx('options_area')}>
                    <div  className={cx('options_entrance')}>
                        <Image
                            className={cx('icon')}
                            src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/divide_black.e1e40d5b.svg"
                        />
                        <div className={cx('options_introduce')}>
                            <div className={cx('title')}>Chia sẻ video và chỉnh sửa</div>
                            <div className={cx('sub_title')}>
                                Bạn có thể nhanh chóng phân chia video thành nhiều phần, loại bỏ các phần thừa và chuyển
                                video ngang thành video dọc
                            </div>
                        </div>
                        <Button primary className={cx('edit_button')}>
                            Chỉnh sửa
                        </Button>
                    </div>
                    <div className={cx('note_area')}>
                        <div className={cx('label_wrap')}>
                            <label className={cx('label_note')}>Chú thích</label>
                            <p className={cx('count')}>
                                0 / <span>150</span>
                            </p>
                        </div>
                        <div className={cx('note-input_wrap')}>
                            <input type="text" className={cx('note_input')} />
                            <div className={cx('icons_note')}>
                                <span className={cx('icon_note')}>@</span>
                                <span className={cx('icon_note')}>#</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className={cx('label_img')}>Ảnh bìa</label>
                        <div className={cx('img-input_wrap')}>
                        </div>
                    </div>
                    <div className={cx('select_wrap')}>
                        <label className={cx('label_select')}>Ai có thể xem video này</label>
                        <select className={cx('select')}>
                            <option className={cx('option')}>Công khai</option>
                            <option className={cx('option')}>Bạn bè</option>
                            <option className={cx('option')}>Riêng tư</option>
                        </select>
                    </div>
                    <div className={cx('button_area')}>
                        <Button text className={cx('cancel_btn')}>
                            Hủy bỏ
                        </Button>
                        <Button primary className={cx('submit_btn')}>
                            Đăng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
