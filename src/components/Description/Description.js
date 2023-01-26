import classNames from "classnames/bind";
import styles from './Description.module.scss'

const cx = classNames.bind(styles)


function Description(props) {
    return (
        <p className={cx('wrapper')}>
            {props.text}
            <a className={cx('hashtag')} href="">
                {props.hashtag.map((allow, index) => (
                    <strong key={index}>#{allow} </strong>
                ))}
            </a>
        </p>
    );
}

export default Description;
