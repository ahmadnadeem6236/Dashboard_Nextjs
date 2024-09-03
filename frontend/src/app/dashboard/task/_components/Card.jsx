import { Draggable } from "react-beautiful-dnd";

function Card({ index, id, onClick, children, assignees, images }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          onClick={onClick}
          style={{
            background: "white",
            margin: "0 0 8px 0",
            borderRadius: 4,
            padding: 0,
            ...provided.draggableProps.style,
          }}
          className=" border-[#E1E1E1]  border-[1px] "
        >
          {/* Display images */}
          <div className="flex flex-wrap gap-2 ">
            {images &&
              images.map((image) => (
                <div
                  key={image.id}
                  className="w-[265px] h-[149.06px] border-b-[1px] border-[#E1E1E1] rounded-t overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
          </div>
          {children}
          <div className=" flex-wrap gap-2 hidden">
            {assignees.map((assignee) => (
              <div key={assignee} className="assignee-badge">
                {assignee}
              </div>
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;