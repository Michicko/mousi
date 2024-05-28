import React, { RefAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

export default function ButtonLink(props:  LinkProps &RefAttributes<HTMLAnchorElement> ) {
  return <Link {...props} />;
}
