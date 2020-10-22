// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerHTML = `${price * quantity}`;
  return price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  let total = 0;
  for (let i=0; i<products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  document.getElementById("total-value").children[0].innerHTML = total;
  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  let row = event.currentTarget.parentNode.parentNode;
  row.parentNode.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let product = document.querySelectorAll('.create-product input');
  let newProduct = document.createElement('tr');
  newProduct.setAttribute('class','product');
  newProduct.innerHTML = `<td class="name"><span>${product[0].value}</span></td><td class="price">$<span>${product[1].value}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`;
  document.querySelector('tbody').appendChild(newProduct);
  // add event listener
  newProduct.getElementsByClassName('btn-remove')[0].addEventListener('click',removeProduct);
  // reset values
  document.querySelectorAll('.create-product input')[0].value = "";
  document.querySelectorAll('.create-product input')[1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i=0; i<removeBtns.length; i++) {
    removeBtns[i].addEventListener('click',removeProduct);
  }
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
