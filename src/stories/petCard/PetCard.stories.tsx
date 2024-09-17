import type { Meta, StoryObj } from '@storybook/react';
import PetCard from './PetCard';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'PetCard',
  component: PetCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PetCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
    };
    return (
      <PetCard
        {...args}
        isFavorite={isFavorite}
        handleFavoriteClick={handleFavoriteClick}
      />
    );
  },
  args: {
    image:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTfat1MSqyUVRBA063tHSr3AZmTqL5T3Kvd2VOzDLWYB7sVznx',
    name: 'Buddy',
    location: 'San Francisco, CA',
    age: '2 years',
    size: 'medium',
    gender: 'male',
    breed: 'Golden Retriever',
    handleFavoriteClick: action('handleFavoriteClick'),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '300px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
