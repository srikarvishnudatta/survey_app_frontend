import { ReactNode } from "react";

interface ButtonProps{
    className?:string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    children?: ReactNode;
}

export function Button({children, className, ...rest}:ButtonProps){
    const newClassName = "btn " + className;
    return <button className={newClassName} {...rest}>{children}</button>
}