import Icons from './index';

type IconsKey = typeof Icons;

interface Props {
  width?: any;
  height?: any;
  icon: keyof IconsKey;
  [key: string]: string;
}

const IconComponent = ({
  width = '1.5rem',
  height = '1.5rem',
  icon,
  ...props
}: Props) => {
  const Icon = Icons[icon];
  return <Icon width={width} height={height} {...props} />;
};

export type { IconsKey };

export default IconComponent;
