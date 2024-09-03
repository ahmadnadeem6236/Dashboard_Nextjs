import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

// Define the functional component and then wrap it with React.memo
const TaskCol = React.memo(function TaskCol({
    id,
    color,
    name,
    children,
    size = 'defaultSize',
}) {
    return (
        <div
            key={id}
            style={{ marginRight: 10 }}
            className="bg-[#F1F1F1]    font-interBold rounded-md p-2 min-w-[300px] md:min-w-[400px] xl:min-w-[254px] overflow-auto"
        >
            <span
                style={{
                    borderRadius: 8,
                    padding: '2px 6px',
                }}
                className="text-[12px] text-[#777777]"
            >
                {name}
            </span>
            <span className="font-interMedium text-[12px] text-[#777777]">
                ({size})
            </span>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            background: snapshot.isDraggingOver
                                ? '#BFDBFE'
                                : 'transparent',
                            padding: 4,
                        }}
                        className=" h-[400px]  bg-transparent overflow-auto scroll-auto "
                    >
                        {children}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
})

export default TaskCol
