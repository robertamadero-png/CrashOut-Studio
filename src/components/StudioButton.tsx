import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type StudioButtonProps =
  | (CommonProps & { to: string; href?: never })
  | (CommonProps & { href: string; to?: never })
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never });

export default function StudioButton({
  children,
  variant = "secondary",
  className = "",
  ...props
}: StudioButtonProps) {
  const classes = `studio-button studio-button--${variant} ${className}`.trim();

  if ("to" in props && props.to) {
    return (
      <Link className={classes} to={props.to}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        className={classes}
        href={props.href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
