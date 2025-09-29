import React from "react";
import './styles/SellItemCom.css'
const Name = () => (
    <input type="text" placeholder=""/>
);
const Detail = () => (
    <textarea  placeholder="พิมพ์ข้อความ..." className="large"></textarea>
);

const SellItemCom = () => {
    return (
        <div className="sell-item-com">
            <div class="flexx">
                <label>ชื่อสินค้า: </label><Name />
            </div>
            <div class="flexx">
                <label>ข้อมูลสินค้า:</label> <Detail />
            </div>
        </div>
    );
}

export default SellItemCom;
