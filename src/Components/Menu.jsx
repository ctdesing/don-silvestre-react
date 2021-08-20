import './Menu.css'
const Menu = () =>{
return(
<div className="menu">
     <div class="menu-items">
    <div v-for="item in menuItems" :key="item.label" class="menu-item">
        <BaseButton mode="flat" :label="item.label" class="item" />
      </div>
    </div>
  </div>
);
}
export default Menu;