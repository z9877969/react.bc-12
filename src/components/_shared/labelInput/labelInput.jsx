export default function LabelInput({
  title,
  type,
  name,
  placeholder = null,
  handleChange,
  handleClick,
  value,
}) {
  return (
    <label className="label">
      {title && <p className="title">{title}</p>}
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleClick}
      />
    </label>
  );
}
