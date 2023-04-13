import React from "react";
function PriceInput({ item, handlePrice }) {
  return (
    <div>
      <p>Price</p>
      <input
        type="number"
        min="0"
        value={item || ""} //見下列
        placeholder="please enter the price"
        onChange={handlePrice}
        className="price"
        required
      />
    </div>
  );
}

export default PriceInput;

// value={itemPrice || ""} 會將 itemPrice 的值指派給 value 屬性，如果 item的值為真（也就是不是 undefined、null 或空字串），那麼 value 屬性的值就會是 item 的值。如果 item 的值為假（即 undefined、null 或空字串），那麼 value 屬性的值就會是空字串。

//因此，由於每次重新渲染時，item的值會根據狀態更新，每次也會根據 item 的最新值更新 value 屬性。因此，它不會保留上一次的值，而是隨著狀態的改變而更新。

/*也就是說按下「新增」按鈕時，此元件會透過呼叫 setItemPrice("")->在app.js， 方法來更新狀態，將 itemPrice 設為空字串。
這會導致 PriceInput 元件重新渲染，同時將空字串傳遞給 PriceInput 的 item 屬性，因此輸入欄位會顯示空白。因此，不會保留上一次輸入的值。 */
