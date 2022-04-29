import React from "react";
import styled from "styled-components";
import { BsClipboard, BsFillGearFill, BsFillChatDotsFill } from "react-icons/bs";
import {FaToolbox} from 'react-icons/fa'

const MiniNav = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  position: absolute;
  position: fixed;
  bottom: 50%;
  left: 0;
  border: solid 2px var(--color-white);
  padding: 1rem;
  border-radius: 0 12px 12px 0;
  background-color: var(--color-bluedark);
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: fixed;
    bottom: 7rem;
  }
`;

export function NavUtilities() {
  return (
    <MiniNav>
      <a href="#" alt="notice board">
        <BsClipboard size={15} />
      </a>
      <a href="#" alt="teachers toolbox">
        <FaToolbox size={15} />
      </a>
      <a href="#" alt="school chat">
        <BsFillChatDotsFill size={15} />
      </a>
      <a href="#" alt="preferences" >
        <BsFillGearFill size={15} />
      </a>
    </MiniNav>
  );
}