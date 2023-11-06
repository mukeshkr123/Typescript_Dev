export interface Reminder {
  id: number;
  title: string;
}

interface ReminderListProps {
  items: Reminder[];
  onRemoveRemainder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveRemainder }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            onClick={() => onRemoveRemainder(item.id)}
            className="btn btn-outline-danger mx-2 rounded-pill"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
