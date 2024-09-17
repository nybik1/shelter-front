import React from 'react';
import styles from './PetCard.module.scss';
import Image from 'next/image';
// TODO: CHANGE SVG MAYBE TO FILL FULL HEART
import HeartSVG from '../../../public/heart.svg';
import Button from '../button/Button';
import cs from 'classnames';

interface PetCardProps {
  name: string;
  location: string;
  gender: 'male' | 'female';
  breed: string;
  age: string;
  size: 'small' | 'medium' | 'large';
  description?: string;
  image: string;
  handleFavoriteClick: () => void;
  isFavorite?: boolean;
}

const PetCard: React.FC<PetCardProps> = ({
  image,
  name,
  location,
  gender,
  breed,
  age,
  size,
  description,
  handleFavoriteClick,
  isFavorite,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        <Image fill={true} src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.name}>
          {name}
          <span
            className={cs(styles.favoriteIcon, {
              [styles.favorite]: isFavorite,
            })}
            onClick={handleFavoriteClick}
          >
            <HeartSVG />
          </span>
        </p>
        <p className={styles.location}>{location}</p>
        <div className={styles.characteristics}>
          <div className={styles.characteristiItem}>
            <p className={styles.characteristicLabel}>Gender:</p>
            <p className={styles.characteristicValue}>{gender}</p>
          </div>
          <div className={styles.characteristiItem}>
            <p className={styles.characteristicLabel}>Breed:</p>
            <p className={styles.characteristicValue}>{breed}</p>
          </div>
          <div className={styles.characteristiItem}>
            <p className={styles.characteristicLabel}>Age:</p>
            <p className={styles.characteristicValue}>{age}</p>
          </div>
          <div className={styles.characteristiItem}>
            <p className={styles.characteristicLabel}>Size:</p>
            <p className={styles.characteristicValue}>{size}</p>
          </div>
        </div>
        {description && <p className={styles.description}>{description}</p>}
        <Button label="More Info" buttonType="secondary" />
      </div>
    </div>
  );
};

export default PetCard;
