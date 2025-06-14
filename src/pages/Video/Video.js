import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { CircleLogoApp, CloseVideoIcon, FacebookIcon, MusicIcon, MuteIcon, ShareEmbedIcon, ShareMessageIcon, ShareTwitterIcon, ShareWhatsAppIcon, UnmuteIcon } from '~/components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown, faChevronUp, faCommentDots, faHeart, faPlay, faShare, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import ActionButton from '~/components/ActionButton/ActionButton';
import { useLocation, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Video() {
    
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video_container')}>
                <div className={cx('blur_background')}>
                    <button onClick={handleBack} className={cx('close_btn')}>
                        <CloseVideoIcon width="18px" height="18px" className={cx('close_icon')} icon={faXmark} />
                    </button>
                    <CircleLogoApp className={cx('logo_circle')} width="40px" height="40px" />
                    <Button className={cx('report_btn')} leftIcon={<FontAwesomeIcon icon={faFlag} />}>
                        Báo cáo
                    </Button>
                    <div className={cx('up-down_wrap')}>
                        <button className={cx('up_btn')}>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                        <button className={cx('down_btn')}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>
                    <FontAwesomeIcon className={cx('play_icon')} icon={faPlay} />
                    <video
                        className={cx('video')}
                        src="https://v16-webapp.tiktok.com/e0635da4fb29dd093ddf402bc6694f92/63bb31f4/video/tos/alisg/tos-alisg-pve-0037/owxWoVb7WAKIvAfKJAVU1jIQKqBnwKt9qbVzhZ/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1342&bt=671&cs=0&ds=3&ft=4b~OyM3a8Zmo0L3Ro64jVVL6PpWrKsdm&mime_type=video_mp4&qs=0&rc=NWVoNGc7NGhkZDRmNztlPEBpamR3dzw6ZmV4ZzMzODgzNEAzMS8xNjY0Ni8xLzY0L2MtYSNgXmBxcjRfb15gLS1kLy1zcw%3D%3D&l=2023010815111588148AA6A84DB5B0A4EE&btag=80000"
                    />
                    <div className={cx('volume_btn')}>
                        <MuteIcon width='2.6rem' height='2.6rem' className={cx('mute_icon')}/>
                        {/* <UnmuteIcon width='2.6rem' height='2.6rem' className={cx('unmute_icon')}/> */}
                    </div>
                </div>
                <Image
                    className={cx('blur_image')}
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                />
            </div>
            <div className={cx('content_container')}>
                <div className={cx('info_wrap')}>
                    <Image className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0704c4885b1a8bb32a72e62e35f15c31.jpeg?x-expires=1673366400&x-signature=OKGEp2YVxScHcBNW27m3AanRm%2FQ%3D'/>
                    <div className={cx('.flex-d-col')}>
                        <div className={cx('nickname')}>longthanh
                        <FontAwesomeIcon className={cx('tick_icon')} icon={faCheckCircle} />
                        </div>
                        <div className={cx('name')}>Thanh Long</div>
                    </div>
                    <Button outline className={cx('follow_btn')} primary>Theo dõi</Button>
                </div>

                <div className={cx('body')}>
                    <div className={cx('user_desc')}>
                        <span>Nhân vật hoạt hình đời thực gây ám ảaanh
                            <a href='/' className={cx('hashtag')}>
                                <strong>#LearnOnTiktok</strong>
                            </a>
                        </span>
                    </div>
                    
                    <div className={cx('music_box')}>
                        <MusicIcon className={cx('music_icon')} width="1.6rem" height="1.6rem"/>
                        <a href="/">Creepy and simple horror background music(1070744) - howlingindicator</a>
                    </div>
                    <div className={cx('user_actions')}>
                        <div className={cx('user_action-button')}>
                            <ActionButton className={cx('liked_icon')} type={faHeart} />
                            <span>20k</span>
                            <ActionButton className={cx('comment_icon')} type={faCommentDots}/>
                            <span>20k</span>
                        </div>
                        <div className={cx('user_action-share')}>
                            <ShareEmbedIcon className={cx('share_icon')} width='2.4rem' height='2.4rem'/>
                            <ShareMessageIcon className={cx('share_icon')} width='2.4rem' height='2.4rem'/>
                            <FacebookIcon className={cx('share_icon')} width='2.4rem' height='2.4rem'/>
                            <ShareWhatsAppIcon className={cx('share_icon')} width='2.4rem' height='2.4rem'/>
                            <ShareTwitterIcon className={cx('share_icon')} width='2.4rem' height='2.4rem'/>
                            <ActionButton className={cx('share_btn')} type={faShare}/>
                        </div>
                    </div>
                    <div className={cx('link_coppy')}>
                        <span>https://www.tiktok.com/@davoslingo/video/7182135826724195611?is_from_webapp=1&sender_device=pc&web_id=7184870339721070081</span>
                        <button className={cx('coppy_btn')}>Sao chép liên kết</button>
                    </div>

                    <div className={cx('comment_box')}>
                    </div>
                   
                    <div className={cx('comment_input')}>
                        <div className={cx('input_wrap')}>
                            <input placeholder='Thêm bình luận'/>
                            <div className={cx('comment_options')}>
                                <div className={cx('icon')}>@</div>
                                <div className={cx('icon')}>$</div>
                            </div>
                        </div>
                        <div className={cx('post')}>Đăng</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
