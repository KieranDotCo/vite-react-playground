import React, { PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";

type Props = {
  path?: string;
} & PropsWithChildren;

export const TEST_WRAPPER_ID = "test-wrapper";

const TestWrapper: React.FC<Props> = (props) => {
  return (
    <div data-testid={TEST_WRAPPER_ID}>
      <MemoryRouter initialEntries={[props.path as string]}>
        {props.children}
      </MemoryRouter>
    </div>
  );
};

TestWrapper.defaultProps = {
  path: "/",
};

export default TestWrapper;
