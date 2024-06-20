
// import Image from "next/image";

// type ButtonProps = {
//   type: 'button' | 'submit';
//   title: string;
//   icon?: string;
//   variant: string;
//   full?: boolean;
//   className?: string; 
// }

// const Button = ({ type, title, icon, variant, full, className }: ButtonProps) => {
//   return (
//     <button
//       className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} ${className}`}
//       type={type}
//     >
//       {icon && <Image src={icon} alt={title} width={34} height={34} />}
//       <label className="bold-16 whitespace-nowrap ">{title}</label>
//     </button>
//   )
// }

// export default Button;

// import Image from "next/image";

// type ButtonProps = {
//   type: 'button' | 'submit';
//   title: string;
//   icon?: string;
//   variant: string;
//   full?: boolean
//   className?: string; 
// }

// const Button = ({ type, title, icon, variant, full, className }: ButtonProps) => {
//   return (
//     <button
//       className={`flex items-center justify-center gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''} ${className}`}
//       type={type}
//       style={{ visibility: 'visible' }}  
//     >
//       {icon && <Image src={icon} alt={title} width={20} height={20} />}
//       <label className="font-bold whitespace-nowrap cursor-pointer">{title}</label>
//     </button>
//   )
// }

// export default Button;

import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  className?: string;
  onClick?: () => void; 
}

const Button = ({ type, title, icon, variant, full, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''} ${className}`}
      type={type}
      onClick={onClick} 
      style={{ visibility: 'visible' }}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <label className="font-bold whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
}

export default Button;


