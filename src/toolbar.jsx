import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='slider' label='Slider' />
                <DraggableNode type='checkbox' label='Checkbox' />
                <DraggableNode type='dropdown' label='Dropdown' />
                <DraggableNode type='colorPicker' label='Color Picker' />
                <DraggableNode type='datePicker' label='Date Picker' />
            </div>
        </div>
    );
};
