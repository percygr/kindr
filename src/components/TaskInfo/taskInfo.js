export default function TaskInfo({ isEditable, categoryIcons, category }) {
  console.log(categoryIcons[0]);
  return (
    <div>
      <p>
        There will be boxes to input task info here - input and display based on
        props
      </p>
      <img src={categoryIcons[category -1].image} alt="category icon" />
      <div>Title: </div>
      {isEditable ? <input type="text" /> : <div>Dummy title</div>}
      <div>Description</div>
      {isEditable ? <input type="text" /> : <div>Dummy description</div>}
      {!isEditable && (
        <div>
          <div>Date Posted:</div>
          <div>1st April</div>
        </div>
      )}
      <div>Location: </div>
      {isEditable ? <input type="text" /> : <div>London</div>}
      <div>Name</div>
      {isEditable ? <input type="text" /> : <div>John Doe</div>}
      <div>Contact Number</div>
      {isEditable ? <input type="text" /> : <div>123-4567</div>}
    </div>
  );
}
