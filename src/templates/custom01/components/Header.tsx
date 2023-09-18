import { IBasics } from 'src/stores/index.interface';
import styled from '@emotion/styled';
import Color from 'color';
import Image from 'next/image';

const Role = styled.span`
  color: ${(props) => Color(props.theme.titleColor).alpha(0.85).toString()};
`;

export default function HeaderCV({ basics }: { basics: IBasics }) {
  return (
    <div>
        <p className="text-xl"><b>{basics.name}</b></p>
        <Role className="text-sm">{basics.label}</Role>
    </div>
  );
}
