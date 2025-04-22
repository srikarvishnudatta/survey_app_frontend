interface InputProps{
    className?:string;
    type?:string;
    placeholder?:string;
    id?:string;
    name?:string;
    required?:boolean
    value?:string | number | readonly string[] | undefined
    onChange?:React.ChangeEventHandler<HTMLInputElement> | undefined
}

export function Input(props: InputProps){
    return <fieldset className="fieldset">
    <legend className="fieldset-legend px-2">What is {props.id}?</legend>
    <input {...props} />
  </fieldset>
}