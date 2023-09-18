import { IBasics } from 'src/stores/index.interface';
import styled from '@emotion/styled';
import Color from 'color';
import Image from 'next/image';
import { IProfiles } from 'src/stores/basic.interface';
import { socialIcons } from 'src/helpers/icons';

const Role = styled.span`
  color: ${(props) => Color(props.theme.titleColor).alpha(0.85).toString()};
`;

function SocialIcons({ profiles }: { profiles: IProfiles[] }) {
  return (
    <div>
      {profiles.map((profile) => {
        const Icon = socialIcons.get(profile.network);

        return (
          Icon &&
          profile.url && (
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.network}
            >
              <div className="flex gap-2 mt-1 justify-content-center align-items-center">
                <Icon className="h-5 w-5 bg-white" />
                <div className="text-xs">
                  <b>{profile.network}</b>
                  <p>{profile.url}</p>
                </div>
              </div>
            </a>
          )
        );
      })}
    </div>
  );
}

export default function BasicIntro({ profile }: { profile?: IProfiles[]; }) {
  return (
    <div>
      {profile && <SocialIcons profiles={profile} />}
    </div>
  );
}
