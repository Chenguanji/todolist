import React, {useRef, useEffect} from 'react';
import {useDrag, useDrop} from 'react-dnd';
//import { HTML5Backend } from 'react-dnd-html5-backend';
import {ItemTypes} from "./ItemTypes"

const DraggableTodoItem = ({ id, text, index, }) => {
  const ref = useRef(null);
  const [, drag] = useDrag({
    item: { type: ItemTypes.TODO_ITEM, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [drag]);

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {text}
    </div>
  );
};

const DroppableTodoList = ({ todos, moveTodo }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TODO_ITEM,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveTodo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  return (
    <div ref={drop}>
      {todos.map((todo, index) => (
        <DraggableTodoItem key={todo.id} id={todo.id} text={todo.text} index={index} moveTodo={moveTodo} />
      ))}
    </div>
  );
};

export { DraggableTodoItem, DroppableTodoList };


