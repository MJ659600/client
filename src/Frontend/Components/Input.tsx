import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import dfstyles from '../Styles/dfstyles';

export const Input = forwardRef(InputImpl);

interface InputProps {
  wide?: boolean;
}

function InputImpl(
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <DFInput
      {...props}
      ref={ref}
      disabled={false}
      onChange={props.disabled ? () => {} : props.onChange}
      onKeyUp={(e) => {
        // we stop propogation of key up events because key up is used
        // by dark forest at the document level for keyboard shortcuts
        // that bring up various panes.
        e.stopPropagation();
        if (props.onKeyUp) {
          props.onKeyUp(e);
        }
      }}
    />
  );
}

export const DFInput = styled.input`
  ${({ wide }: { wide?: boolean }) => css`
    transition: background-color 0.2s color 0.2s width 0.2s !important;
    outline: none;
    background: ${dfstyles.colors.background};
    color: ${dfstyles.colors.subtext};
    border-radius: 4px;
    border: 1px solid ${dfstyles.colors.text};
    ${wide ? `width: 100%;` : `width: 21em;`}
    padding: 2px 6px;

    &:focus {
      background: ${dfstyles.colors.backgroundlight};
      color: ${dfstyles.colors.text};
    }
  `}
`;
