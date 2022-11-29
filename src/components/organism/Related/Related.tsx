import Button from '@src/components/atoms/Button/Button';
import { RelatedProps } from '@src/types/Related';
import StyledRelated from './Related.styles';

const Related = ({ ...props }: RelatedProps) => {
  const {
    items,
    intro: { subtitle, text, title, cta },
  } = props;

  return (
    <StyledRelated>
      {subtitle && <h5>{subtitle}</h5>}
      {title && <h2>{title}</h2>}
      {text && <p className="related__brief">{text}</p>}
      {cta && (
        <Button href={cta.href} icon="Arrow">
          {cta.label.toUpperCase()}
        </Button>
      )}

      <div className="related__article__wrapper">
        {items.map(
          (
            { title, category: { href, label }, image, slug, description },
            idx
          ) => (
            <article key={idx} className="related__article">
              <a href={href}>
                <img src={image} alt={slug} />
              </a>
              <h5>{label}</h5>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          )
        )}
      </div>
    </StyledRelated>
  );
};

export default Related;
