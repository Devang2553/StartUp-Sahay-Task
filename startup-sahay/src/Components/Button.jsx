import clsx from "clsx";


const Button = ({
  as: Tag,
  variant,
  size,
  isRound,
  className,
  ...rest
}) => {
  return (
    <Tag
      className={clsx('btn', {
        'btn--primary': variant === 'primary',
        'btn--secondary': variant === 'secondary',
        'btn--small': size === 'small',
        'btn--large': size === 'large',
        'btn--round': isRound,
        [className || '']: !!className,
      })}
      {...rest}
    />
  );
};

export default Button;