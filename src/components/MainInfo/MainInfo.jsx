import PropTypes from "prop-types";

const MainInfo = (props) => {
  const { title, options, btnTitle } = props;

  return (
    <section>
      <h2>{title}</h2>
      <p>EUR</p>
      <button type="button">{btnTitle}</button>
      <ul>
        {options.map(({ period, sum }) => (
          <li key={period}>
            <span>{period}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

MainInfo.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      sum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired
  ).isRequired,
  btnTitle: PropTypes.string.isRequired,
};

export default MainInfo;

// const listProp = [
//     {
//         author: "Author",
//         books: []
//     }
// ]

// const Item = ({ title, author }) => (
//   <li>
//     <p>{author}</p>
//     {title} - {author}
//   </li>
// );

// const List = ({ array }) => {
//   return (
//     <ul>
//       {array.map(({id, ...el}) => (
//         <Item {...el} key={id} />
//       ))}
//     </ul>
//   );
// };

// List.propTypes = {
//   array: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

{
  /* <List
  array={[
    { id: "321", title: "654" },
    { id: "322", title: "654" },
  ]}
/>; */
}
