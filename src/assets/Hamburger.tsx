export const Hamburger: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="38" width="38" {...props}>
      <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" fill="#213F7D" />
    </svg>
  );
};
