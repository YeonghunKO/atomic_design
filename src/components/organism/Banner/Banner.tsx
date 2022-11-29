import Button from '@src/components/atoms/Button/Button';
import { BannerProps } from '@src/types/Banner';
import HTMLReactParser from 'html-react-parser';
import StyledBanner from './Banner.styles';

const Banner = ({ ...props }: BannerProps) => {
  const { content, cta, title } = props.default;
  console.log(props.default);

  return (
    <StyledBanner {...props.default}>
      {title && <h2>{title}</h2>}
      {content && <p>{HTMLReactParser(content)}</p>}
      {cta && (
        <Button variant="secondary" href={cta.url}>
          {cta.title}
        </Button>
      )}
    </StyledBanner>
  );
};

export default Banner;
