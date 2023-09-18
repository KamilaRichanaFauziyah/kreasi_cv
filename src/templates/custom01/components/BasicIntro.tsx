import { IBasics } from 'src/stores/index.interface';
import styled from '@emotion/styled';
import Color from 'color';
import Image from 'next/image';

const Role = styled.span`
  color: ${(props) => Color(props.theme.titleColor).alpha(0.85).toString()};
`;

export default function BasicIntro({ basics }: { basics: IBasics }) {
  return (
    <div>
        {/* <Role className="text-sm">{basics.label}</Role> */}
        

      <span className="text-xs">
        Pengalaman sesuai:&nbsp;
        <strong>{basics.relExp}</strong>
      </span>
      <div className="text-xs">Total pengalaman:&nbsp;{basics.totalExp}</div>

      <div className="flex gap-2 mt-2">
        <Image src={'/icons/phone.svg'} alt="Phone" width={12} height={12} />
        <a className="text-xs" href={`tel:${basics.phone}`}>
          {basics.phone}
        </a>
      </div>

      <div className="flex gap-2 mt-1">
        <Image src={'/icons/mail.svg'} alt="Email" width={12} height={12} />
        <a className="text-xs" href={`mailto:${basics.email}`}>
          {basics.email}
        </a>
      </div>

      <div className="flex gap-2 mt-1">
        <Image src={'/icons/location.svg'} alt="Location" width={12} height={12} />
        <span className="text-xs">{basics.location.city}</span>
      </div>
    </div>
  );
}
