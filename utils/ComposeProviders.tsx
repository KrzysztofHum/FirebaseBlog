import React from "react";

export type Components =
  | React.ComponentType
  | [React.ComponentType, { [key: string]: any }];

type Props = {
  components: Components[];
};

const ComposeProviders: React.FC<Props> = ({ components, children }) => (
  <>
    {components.reduce((acc, curr) => {
      const [ProviderComponent, props] = Array.isArray(curr)
        ? [curr[0], curr[1]]
        : [curr, {}];

      return <ProviderComponent {...props}>{acc}</ProviderComponent>;
    }, children)}
  </>
);

export default ComposeProviders;
