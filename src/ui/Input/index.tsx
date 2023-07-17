import "./style.scss";

interface IProps {
  text: string;
  placeholder?: string;
}

export function Input(props: IProps) {
  const { text, placeholder } = props;

  return (
    <input
      className="index-input"
      type="text"
      value={text}
      placeholder={placeholder}
    ></input>
  );
}
