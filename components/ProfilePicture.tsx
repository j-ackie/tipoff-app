import { FC } from 'react';
import { Image } from 'react-native';

interface ProfilePictureProps {
  uri?: string | null;
  size?: number;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ uri, size = 50 }) => {
  return (
    <Image
      source={
        uri ? { uri } : require('@/assets/images/default-profile-picture.jpg')
      }
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
};

export default ProfilePicture;
