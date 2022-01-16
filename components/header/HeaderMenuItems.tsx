import { MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ListItem = ({ href, label, onClick, children }: Props) => (
  <Link href={href} passHref>
    <MenuItem onClick={onClick}>
      {label}
      {children}
    </MenuItem>
  </Link>
);

ListItem.defaultProps = {
  onClick: () => null,
  children: null,
};

const HeaderMenuItems = () => {
  return (
    <>
      <ListItem href="/expenses" label="EXPENSES" />
      <ListItem href="/investments" label="INVESTMENTS" />
    </>
  );
};

export default HeaderMenuItems;
