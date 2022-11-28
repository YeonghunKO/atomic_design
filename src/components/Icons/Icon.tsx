import Icons from './index';

type IconsKey = typeof Icons;

interface Props {
  width?: any;
  height?: any;
  icon: keyof IconsKey;
  [key: string]: string;
}

const IconComponent = ({
  width = '2.5rem',
  height = '2.5rem',
  icon,
  ...props
}: Props) => {
  const Icon = Icons[icon];

  if (!Icon) {
    return null;
  }

  return <Icon width={width} height={height} {...props} />;
};

export type { IconsKey };

export default IconComponent;
