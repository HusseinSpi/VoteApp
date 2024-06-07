export const Input = ({ img, type }) => {
  return (
    <div className="input">
      <img src={img} alt="" />
      <input type={type} placeholder={type === "text" ? "name" : type} />
    </div>
  );
};
