import { SOCIALMEDIA } from "../constance";

export default function SocialMedia({ cName = "md:flex hidden" }) {
  return (
    <div className={`${cName}`}>
      {SOCIALMEDIA.map((link) => (
        <div className="ml-3">{link.icon}</div>
      ))}
    </div>
  );
}
