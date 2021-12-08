export default function LabelInput({ title, type, placeholder = null }) {
  return (
    <label className="label">
      {title && <p className="title">{title}</p>}
      <input className="input" type={type} placeholder={placeholder} />
    </label>
  );
}
