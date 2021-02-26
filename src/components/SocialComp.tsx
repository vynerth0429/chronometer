interface ComponentProps {
  icon: any,
  link: string,
  label: string,
}

function SocialComp(props: ComponentProps) {
  return (
    <a href={props.link}>
      <span className="sr-only">{`link for ${props.label}`}</span>
      <props.icon className="w-6 h-6 hover:fill-current hover:text-soft-red" />
    </a>
  )
}

export default SocialComp;
