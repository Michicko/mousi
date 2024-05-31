import React from "react";

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  return (
    <main className="main">{props.children}</main>
  )
}
