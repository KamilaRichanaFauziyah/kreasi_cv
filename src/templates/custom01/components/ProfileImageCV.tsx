import { HTMLRenderer } from 'src/helpers/common/components/HTMLRenderer';
import { ProfileImage } from 'src/helpers/common/components/ProfileImage';
import styles from './about.module.css';
import styled from '@emotion/styled';

const CenterImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  @media print {
    border: none;
  }
`;

export default function ProfileImageCV({
  profileImage,
}: {
  summary: string;
  profileImage: string;
}) {
  return (
    <CenterImage>
      {profileImage.length !== 0 && (
        <ProfileImage
          src={profileImage}
          width={'140px'}
          height={'140px'}
          imageWrapperClassname={`float-left mr-3 mb-1 ${styles.imageWrapShape}`}
        />
      )}
    </CenterImage>
  );
}
