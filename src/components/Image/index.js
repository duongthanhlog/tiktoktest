import { forwardRef, useState } from 'react'
import images from '~/assests/images';

function Image( {src, className, ...props }, ref ) {
    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(images.noImage)
    }

    return <img className={className} ref={ref} src={fallBack || src} {...props} onError={handleError}/>
}

export default forwardRef(Image);