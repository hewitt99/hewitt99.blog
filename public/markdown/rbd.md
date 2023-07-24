# React-Beautiful-Dnd

#### 使用行内样式失效

原因：draggableProps包含了style，会有覆盖

解决方案：

```jsx
export default function Item({ id, index }) {
 return (
  <Draggable draggableId={id} index={index}>
   {({ draggableProps, dragHandleProps, innerRef }) => (
    <div
     ref={innerRef}
     {...draggableProps}
     {...dragHandleProps}
     style={{
      ...draggableProps.style,
     }}
    >
     <Typography.Text ellipsis style={{ maxWidth: '100%' }}>
      <DragOutlined style={{ marginRight: 8 }} />
      {id}
     </Typography.Text>
    </div>
   )}
  </Draggable>
 );
}
```

