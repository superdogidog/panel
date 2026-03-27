import Link from '@docusaurus/Link';
import clsx from 'clsx';
// Button component that accepts the specified props.
export default function Button({ size = null, outline = false, variant = 'primary', block = false, disabled = false, className, style, link, label }) {
    const sizeMap = {
        sm: 'sm',
        small: 'sm',
        lg: 'lg',
        large: 'lg',
        medium: null
    };
    const buttonSize = size ? sizeMap[size] : '';
    const sizeClass = buttonSize ? `button--${buttonSize}` : '';
    const outlineClass = outline ? 'button--outline' : '';
    const variantClass = variant ? `button--${variant}` : '';
    const blockClass = block ? 'button--block' : '';
    const disabledClass = disabled ? 'disabled' : '';
    const destination = disabled ? null : link;
    return (<Link to={destination}>
            <button aria-disabled={disabled} className={clsx('button', sizeClass, outlineClass, variantClass, blockClass, disabledClass, className)} role="button" style={style}>
                {label}
            </button>
        </Link>);
}
