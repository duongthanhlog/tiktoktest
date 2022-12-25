import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react'
import images from '~/assests/images';

const  Image = forwardRef(( {src, className, ...props }, ref ) => {
    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(images.noImage)
    }

    return <img ref={ref} className={className} src={fallBack || src} {...props} onError={handleError}/>
})

Image.propTypes = {
    src : PropTypes.string,
    className : PropTypes.string
}

export default Image;