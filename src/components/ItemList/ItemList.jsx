import Item from "../Item/Item"

const ItemList = ({items}) => {
  return (
    <div className="container">
       {items.length=== 0?(<PacmanLoader color="#fdf8f2" size={30}/>
       ):(
        items.map((item) => {
      return <Item key={item.id} item={item}/>;
    })
       )}
    </div>
  );
};

export default ItemList;