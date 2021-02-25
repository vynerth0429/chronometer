interface ComponentProps {
  icon: any,
  link: string,
}

function SocialComp(props: ComponentProps) {
  return (
    <a href={props.link}>
      <props.icon className="w-6 h-6 hover:fill-current hover:text-soft-red" />
    </a>
  )
}

export default SocialComp;
