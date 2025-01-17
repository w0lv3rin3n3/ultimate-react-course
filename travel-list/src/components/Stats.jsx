/* eslint-disable react/prop-types */
const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.floor((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} ${
              numItems > 1 ? "items" : "item"
            } on your list,
        and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
