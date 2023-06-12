export default function TaskInfo({ isEditable }) {
  console.log(isEditable);
  return (
    <div>
      <p>
        There will be boxes to input task info here - input and display based on
        props
      </p>
      {isEditable ? <p>Editable</p> : <p>Not editable</p>}
    </div>
  );
}
