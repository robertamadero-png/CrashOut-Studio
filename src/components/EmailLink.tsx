type EmailLinkProps = {
  email: string;
};

export default function EmailLink({ email }: EmailLinkProps) {
  return (
    <a className="email-link" href={`mailto:${email}`}>
      {email}
    </a>
  );
}
